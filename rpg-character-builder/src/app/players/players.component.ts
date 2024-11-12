import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Character {
    name: string;
    gender: string;
    class: string;
    faction: string;
    startingLocation: string;
    funFact: string;
}

@Component({
    selector: 'app-player',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent {
    characters: Character[] = [
        { name: "Thorn", gender: "Male", class: "Warrior", faction: "The Iron Brotherhood", startingLocation: "Ironhold", funFact: "Thorn once single-handedly defeated a dragon." },
        { name: "Elara", gender: "Female", class: "Mage", faction: "Arcane Order", startingLocation: "Mystic Hollow", funFact: "Elara can conjure a storm with a mere whisper." },
        { name: "Finn", gender: "Male", class: "Rogue", faction: "Shadow Syndicate", startingLocation: "Dark Alley", funFact: "Finn is known as the fastest thief in the kingdom." },
        { name: "Lyra", gender: "Female", class: "Warrior", faction: "Iron Brotherhood", startingLocation: "Ironhold", funFact: "Lyra is Thorn's sister and also a dragon slayer." },
        { name: "Merlin", gender: "Other", class: "Mage", faction: "Arcane Order", startingLocation: "Old Tower", funFact: "Merlin once saved the king's life." },
        { name: "Aldric", gender: "Male", class: "Warrior", faction: "Iron Brotherhood", startingLocation: "Battlefield", funFact: "Aldric has never lost a duel." },
        { name: "Soraya", gender: "Female", class: "Rogue", faction: "Shadow Syndicate", startingLocation: "Hidden Forest", funFact: "Soraya can vanish into thin air." },
        { name: "Bram", gender: "Male", class: "Warrior", faction: "Iron Brotherhood", startingLocation: "North Gate", funFact: "Bram holds the title of champion." },
        { name: "Isolde", gender: "Female", class: "Mage", faction: "Arcane Order", startingLocation: "Silver Tower", funFact: "Isolde speaks the language of the birds." },
        { name: "Kane", gender: "Other", class: "Rogue", faction: "Shadow Syndicate", startingLocation: "Dark Alley", funFact: "Kane can unlock any door." }
    ];
}

