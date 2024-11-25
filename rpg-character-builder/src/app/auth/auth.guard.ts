import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    const sessionUser = this.cookieService.get('session_user');
    console.log('AuthGuard: session_user =', sessionUser); // Debug log
    if (sessionUser) {
      return true;
    }
    this.router.navigate(['/signin']); // Redirect to signin if not authenticated
    return false;
  }
}
