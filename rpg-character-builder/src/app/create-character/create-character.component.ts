
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from '../character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CharacterListComponent
  ],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  characters: Character[] = [];
  name: string = '';
  gender: string = 'Male';
  class: string = 'Warrior';

  addCharacter() {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.name,
      gender: this.gender,
      class: this.class,
    };
    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.gender = 'Male';
    this.class = 'Warrior';
  }
}
