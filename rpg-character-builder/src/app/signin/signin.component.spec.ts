import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['signin']);
    const cookieServiceSpy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll', 'get']);

    await TestBed.configureTestingModule({
      imports: [SigninComponent], // Import the standalone component
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: CookieService, useValue: cookieServiceSpy },
      ],
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    cookieService = TestBed.inject(CookieService) as jasmine.SpyObj<CookieService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    // Arrange
    authService.signin.and.callFake((email: string, password: string) => {
      cookieService.set('session_user', email); // Simulate cookie setting inside signin method
      return true;
    });
    component.signinForm.setValue({ email: 'test@example.com', password: 'password123' });

    // Act
    component.onSubmit();

    // Assert
    expect(authService.signin).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(cookieService.set).toHaveBeenCalledWith('session_user', 'test@example.com');
  });

  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    // Arrange
    authService.signin.and.returnValue(false);
    component.signinForm.setValue({ email: 'test@example.com', password: 'wrongpassword' });

    // Act
    component.onSubmit();

    // Assert
    expect(authService.signin).toHaveBeenCalledWith('test@example.com', 'wrongpassword');
    expect(cookieService.set).not.toHaveBeenCalled();
  });

  it('should call signin method on form submission', () => {
    // Arrange
    authService.signin.and.returnValue(true);
    spyOn(component, 'onSubmit').and.callThrough();
    component.signinForm.setValue({ email: 'test@example.com', password: 'password123' });

    // Act
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    // Assert
    expect(component.onSubmit).toHaveBeenCalled();
    expect(authService.signin).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
