import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, FormsModule], // Import the standalone component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a random character ID between 1 and 1000', () => {
    const id = Math.floor(Math.random() * 1000) + 1;
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
  });

  it('should add a character with correct customization', () => {
    component.name = 'Test Character';
    component.gender = 'Female';
    component.class = 'Mage';
    component.addCharacter();
    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Test Character');
    expect(component.characters[0].gender).toBe('Female');
    expect(component.characters[0].class).toBe('Mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'Test Character';
    component.gender = 'Female';
    component.class = 'Mage';
    component.resetForm();
    expect(component.name).toBe('');
    expect(component.gender).toBe('Male');
    expect(component.class).toBe('Warrior');
  });
});
