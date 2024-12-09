import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should display characters in the list', () => {
    // Arrange: Set the character data
    component.characters = [
      { id: 1, name: 'Alice', gender: 'Female', class: 'Mage' },
      { id: 2, name: 'Bob', gender: 'Male', class: 'Warrior' },
    ];

    // Act: Trigger change detection to render the template
    fixture.detectChanges();

    // Query all data rows (skip the header row)
    const rows = fixture.debugElement.queryAll(By.css('table tr')).slice(2); // Exclude title and header row

    // Assert: Check the number of rows
    expect(rows.length).toBe(2);

    // Check the content of the first row
    const firstRowCells = rows[0].queryAll(By.css('td')).map(cell => cell.nativeElement.textContent.trim());
    expect(firstRowCells).toEqual(['1', 'Alice', 'Female', 'Mage']);

    // Check the content of the second row
    const secondRowCells = rows[1].queryAll(By.css('td')).map(cell => cell.nativeElement.textContent.trim());
    expect(secondRowCells).toEqual(['2', 'Bob', 'Male', 'Warrior']);
  });

  it('should display a message for an empty character list', () => {
    // Arrange: Set the character data to an empty array
    component.characters = [];

    // Act: Trigger change detection
    fixture.detectChanges();

    // Query for the empty message
    const message = fixture.debugElement.query(By.css('.empty-message'));

    // Assert: Check if the message is displayed
    expect(message).toBeTruthy();
    expect(message.nativeElement.textContent.trim()).toBe('No characters available.');
  });
});

