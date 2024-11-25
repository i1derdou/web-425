/*
 * Author:    David Clemens
 * Date:      2024-11-24
 * File Name: app.routes.ts
 * Description:
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Component for the home page
import { PlayersComponent } from './players/players.component'; // Component displaying player information
import { CreateCharacterComponent } from './create-character/create-character.component'; // Component to create characters
import { SigninComponent } from './signin/signin.component'; // Sign-in page component
import { CreateGuildComponent } from './create-guild/create-guild.component'; // Component to create guilds
import { CharacterFactionComponent } from './character-faction/character-faction.component'; // Component for character faction management
import { AuthGuard } from './auth/auth.guard'; // Auth guard to protect routes

export const routes: Routes = [
  {
    path: '', // Default path
    component: HomeComponent // Renders the HomeComponent for the base route
  },
  {
    path: 'home', // Explicit route for the home page
    component: HomeComponent // Renders the HomeComponent
  },
  {
    path: 'players', // Route to view player information
    component: PlayersComponent // Renders the PlayersComponent
  },
  {
    path: 'create-character', // Route to create a new character
    component: CreateCharacterComponent, // Renders the CreateCharacterComponent
    canActivate: [AuthGuard] // Protected by AuthGuard; requires authentication
  },
  {
    path: 'create-guild', // Route to create a new guild
    component: CreateGuildComponent, // Renders the CreateGuildComponent
    canActivate: [AuthGuard] // Protected by AuthGuard; requires authentication
  },
  {
    path: 'character-faction', // Route to manage character factions
    component: CharacterFactionComponent, // Renders the CharacterFactionComponent
    canActivate: [AuthGuard] // Protected by AuthGuard; requires authentication
  },
  {
    path: 'signin', // Route for the sign-in page
    component: SigninComponent, // Renders the SigninComponent
  },
  {
    path: '', // Default redirect route
    redirectTo: '/signin', // Redirects to the sign-in page if no specific route is provided
    pathMatch: 'full' // Ensures the entire path matches for the redirect
  },
];
