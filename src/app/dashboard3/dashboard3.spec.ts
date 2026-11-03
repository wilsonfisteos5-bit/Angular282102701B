import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Dashboard3 } from './dashboard3';

describe('Dashboard3', () => {
  let component: Dashboard3;
  let fixture: ComponentFixture<Dashboard3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard3],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the Dashboard v3 heading', () => {
    const heading = fixture.nativeElement.querySelector('h1') as HTMLHeadingElement;

    expect(heading.textContent).toContain('Dashboard v3');
  });

  it('should use the light color scheme', () => {
    const dashboard = fixture.nativeElement.querySelector('.dashboard3-light') as HTMLElement;

    expect(dashboard.getAttribute('data-bs-theme')).toBe('light');
  });
});
