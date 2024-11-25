import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { empId: 1, email: 'test1@example.com', password: 'password1' },
    { empId: 2, email: 'test2@example.com', password: 'password2' },
  ];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService) {}

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.cookieService.set('session_user', email); // Set the cookie
      this.authState.next(true);
      return true;
    }
    this.authState.next(false);
    return false;
  }

  signout(): void {
    this.cookieService.delete('session_user');
    this.authState.next(false);
  }
}
