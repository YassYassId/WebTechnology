import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { User, AuthResponse } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // JSON Server URL
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;
  private tokenKey = 'auth_token';
  private userKey = 'current_user';

  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem(this.userKey);
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: User): Observable<AuthResponse> {
    // Check if user already exists (in a real app, this would be handled by the server)
    return this.http
      .get<User[]>(`${this.apiUrl}/users?email=${user.email}`)
      .pipe(
        map((users) => {
          if (users.length > 0) {
            throw new Error('User with this email already exists');
          }
          return this.http.post<User>(`${this.apiUrl}/users`, user).pipe(
            map((newUser) => {
              // Generate a fake token (in a real app, this would come from the server)
              const token =
                'fake-jwt-token-' + Math.random().toString(36).substr(2);
              const response: AuthResponse = {
                user: { ...newUser, password: undefined }, // Don't return password
                token,
                success: true,
              };
              this.setSession(response);
              return response;
            })
          );
        }),
        catchError((error) => {
          return throwError(() => error);
        }),
        // Flatten the observable
        mergeMap((obs) => obs)
      );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`).pipe(
      map((users) => {
        const user = users[0];

        // Check if user exists and password matches
        if (!user || user.password !== password) {
          throw new Error('Invalid email or password');
        }

        // Remove password before storing user object
        const { password: _, ...userWithoutPassword } = user;

        // Generate a fake token (in a real app, this would come from the server)
        const token = 'fake-jwt-token-' + Math.random().toString(36).substr(2);

        const response: AuthResponse = {
          user: userWithoutPassword,
          token,
          success: true,
        };

        this.setSession(response);
        return response;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  private setSession(authResult: AuthResponse): void {
    localStorage.setItem(this.tokenKey, authResult.token);
    localStorage.setItem(this.userKey, JSON.stringify(authResult.user));
    this.currentUserSubject.next(authResult.user);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
