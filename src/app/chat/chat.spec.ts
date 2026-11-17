import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlDirective } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Chat } from './chat';

describe('Chat', () => {
  let component: Chat;
  let fixture: ComponentFixture<Chat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chat],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Chat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render conversations and send a message', async () => {
    const input = fixture.nativeElement.querySelector('#chat-message') as HTMLInputElement;
    const formControl = fixture.debugElement.query(By.directive(FormControlDirective))
      .injector.get(FormControlDirective);
    formControl.control.setValue('Ada kabar terbaru?');
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('.chat-composer') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Olivia Bennett');
    expect(fixture.nativeElement.textContent).toContain('Ada kabar terbaru?');
    expect(input.value).toBe('');
  });
});
