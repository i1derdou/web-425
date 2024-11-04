import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
export const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'player',
    component: PlayerComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent
  },
  {
    path: 'character-faction',
    component: CharacterFactionComponent
  }
];
