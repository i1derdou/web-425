/*
 * Author:    David Clemens
 * Date:      2024-11-24
 * File Name: app.config.ts
 * Description:
*/

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// The application's global configuration object
export const appConfig: ApplicationConfig = {
  providers: [
    // Configures zone-based change detection with optimized event coalescing
    // Event coalescing reduces unnecessary change detection cycles by grouping events
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provides the routing configuration to the application
    // This enables navigation and route management using the `routes` array defined in app.routes.ts
    provideRouter(routes),
  ],
};

