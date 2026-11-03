import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;
  let originalViewportWidth: number;

  beforeEach(async () => {
    originalViewportWidth = window.innerWidth;

    await TestBed.configureTestingModule({
      imports: [Sidebar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalViewportWidth,
    });
    document.body.classList.remove('sidebar-open', 'sidebar-collapse');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the sidebar on mobile after selecting a dashboard', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 });
    document.body.classList.add('sidebar-open');

    component.closeSidebarOnMobile();

    expect(document.body.classList.contains('sidebar-open')).toBe(false);
    expect(document.body.classList.contains('sidebar-collapse')).toBe(true);
  });

  it('should keep the sidebar open on desktop', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1280 });
    document.body.classList.add('sidebar-open');

    component.closeSidebarOnMobile();

    expect(document.body.classList.contains('sidebar-open')).toBe(true);
    expect(document.body.classList.contains('sidebar-collapse')).toBe(false);
  });
});
