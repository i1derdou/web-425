import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule] // Import CreateGuildComponent
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.guildForm;
    expect(form).toBeDefined();
    expect(form.get('guildName')?.value).toBe('');
    expect(form.get('description')?.value).toBe('');
    expect(form.get('type')?.value).toBe('');
    expect(form.get('notificationPreference')?.value).toBe('');
    expect(form.get('acceptTerms')?.value).toBe(false);
  });

  it('should mark the form as invalid if required fields are empty', () => {
    const form = component.guildForm;
    form.get('guildName')?.setValue('');
    form.get('description')?.setValue('');
    form.get('type')?.setValue('');
    form.get('notificationPreference')?.setValue('');
    form.get('acceptTerms')?.setValue(false);
    expect(form.valid).toBeFalse();
  });

  it('should add a new guild to the list when the form is valid and submitted', () => {
    const form = component.guildForm;
    form.get('guildName')?.setValue('Test Guild');
    form.get('description')?.setValue('A test description');
    form.get('type')?.setValue('Competitive');
    form.get('notificationPreference')?.setValue('Email');
    form.get('acceptTerms')?.setValue(true);

    component.onSubmit();

    expect(component.createdGuilds.length).toBe(1);
    expect(component.createdGuilds[0].guildName).toBe('Test Guild');
    expect(component.createdGuilds[0].description).toBe('A test description');
    expect(component.createdGuilds[0].type).toBe('Competitive');
    expect(component.createdGuilds[0].notificationPreference).toBe('Email');
  });
});
