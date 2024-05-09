import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInquiryComponent } from './order-inquiry.component';

describe('OrderInquiryComponent', () => {
  let component: OrderInquiryComponent;
  let fixture: ComponentFixture<OrderInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInquiryComponent]
    });
    fixture = TestBed.createComponent(OrderInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
