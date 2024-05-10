import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreviewcomponentComponent } from './customerreviewcomponent.component';

describe('CustomerreviewcomponentComponent', () => {
  let component: CustomerreviewcomponentComponent;
  let fixture: ComponentFixture<CustomerreviewcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerreviewcomponentComponent]
    });
    fixture = TestBed.createComponent(CustomerreviewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
