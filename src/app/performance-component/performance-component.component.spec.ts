import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceComponentComponent } from './performance-component.component';

describe('PerformanceComponentComponent', () => {
  let component: PerformanceComponentComponent;
  let fixture: ComponentFixture<PerformanceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceComponentComponent]
    });
    fixture = TestBed.createComponent(PerformanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
