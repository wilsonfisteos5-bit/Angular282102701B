import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Dashboard2 } from './dashboard2';

describe('Dashboard2', () => {
  let component: Dashboard2;
  let fixture: ComponentFixture<Dashboard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard2],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the light color scheme', () => {
    const dashboard = fixture.nativeElement.querySelector('.dashboard2-light') as HTMLElement;

    expect(dashboard.getAttribute('data-bs-theme')).toBe('light');
  });
});
