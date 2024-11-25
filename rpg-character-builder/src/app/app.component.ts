/*
 * Author:    David Clemens
 * Date:      2024-11-24
 * File Name: app.component.ts
 * Description:
*/

// Import necessary Angular modules and services
import { Component, OnInit } from '@angular/core'; // Component decorator and lifecycle hook for initialization
import { AuthService } from './auth/auth.service'; // Custom authentication service for managing user state
import { CookieService } from 'ngx-cookie-service'; // Service for managing cookies in the browser
import { RouterLink, RouterOutlet } from '@angular/router'; // Angular Router directives for navigation
import { CommonModule } from '@angular/common'; // Angular common module for built-in directives
import { RouterModule } from '@angular/router'; // RouterModule for navigation and route management

@Component({
  selector: 'app-root', // Root component selector used in the HTML
  standalone: true, // Marks this component as standalone (does not rely on an Angular module)
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule], // Imports required modules and directives
  templateUrl: './app.component.html', // HTML template for this component
  styleUrls: ['./app.component.css'], // CSS styles for this component
})
export class AppComponent implements OnInit { // Implements OnInit lifecycle hook
  isAuthenticated = false; // Boolean to track if the user is authenticated
  email: string | null = null; // Stores the authenticated user's email

  // Inject AuthService for authentication logic and CookieService for managing cookies
  constructor(private authService: AuthService, private cookieService: CookieService) {}

  // Lifecycle hook that runs once the component initializes
  ngOnInit() {
    // Subscribe to the authentication state observable
    this.authService.getAuthState().subscribe((isAuth) => {
      this.isAuthenticated = isAuth; // Update the authentication status
      if (isAuth) {
        // If authenticated, get the user's email from the session cookie
        this.email = this.cookieService.get('session_user');
      } else {
        // If not authenticated, clear the email
        this.email = null;
      }
    });
  }

  // Method to sign out the user
  signout() {
    this.authService.signout(); // Call the signout method from AuthService
  }
}
