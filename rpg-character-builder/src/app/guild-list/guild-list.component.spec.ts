import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { By } from '@angular/platform-browser';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
  });

  it('should display guilds in the list', () => {
    // Arrange: Set the guild data
    component.guilds = [
      { guildName: 'Guild A', description: 'Description A', type: 'Social', notificationPreference: 'Email' },
      { guildName: 'Guild B', description: 'Description B', type: 'Competitive', notificationPreference: 'SMS' },
    ];

    // Act: Trigger change detection to render the template
    fixture.detectChanges();

    // Query all list items
    const listItems = fixture.debugElement.queryAll(By.css('ul li'));

    // Assert: Check the number of list items
    expect(listItems.length).toBe(2);

    // Check the content of the first list item
    const firstItemText = listItems[0].nativeElement.textContent.trim();
    expect(firstItemText).toContain('Guild A');
    expect(firstItemText).toContain('Description A');
    expect(firstItemText).toContain('Social');
    expect(firstItemText).toContain('Email');

    // Check the content of the second list item
    const secondItemText = listItems[1].nativeElement.textContent.trim();
    expect(secondItemText).toContain('Guild B');
    expect(secondItemText).toContain('Description B');
    expect(secondItemText).toContain('Competitive');
    expect(secondItemText).toContain('SMS');
  });

  it('should display a message for an empty guild list', () => {
    // Arrange: Set the guilds array to empty
    component.guilds = [];

    // Act: Trigger change detection
    fixture.detectChanges();

    // Query for the empty message element
    const message = fixture.debugElement.query(By.css('.empty-message'));

    // Assert: Check if the empty message is displayed
    expect(message).toBeTruthy();
    expect(message.nativeElement.textContent.trim()).toBe('No guilds available.');
  });
});

