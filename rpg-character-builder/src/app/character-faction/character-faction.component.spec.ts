import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent], // Use imports for standalone components
      providers: [
        { provide: HttpClient, useValue: httpClientSpy } // Mock HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpClientSpy.get.and.returnValue(of([
      { name: 'Faction 1', description: 'Description of Faction 1' },
      { name: 'Faction 2', description: 'Description of Faction 2' }
    ]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character factions', () => {
    // Simulate ngOnInit
    component.ngOnInit();
    fixture.detectChanges(); // Trigger change detection

    const compiled = fixture.nativeElement as HTMLElement;

    // Verify the rows in the table
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2); // Two faction rows
  });
});
