import { Component } from '@angular/core';

@Component({
  selector: 'abc-cafe',
  templateUrl: './abc-cafe.component.html',
  styleUrls: ['./abc-cafe.component.css']
})
export class AbcCafeComponent {
  customerName: string = '';
  orderInquiryActive: boolean = false;
  selectedBeverage: string = '';
  customerOrders: { customerName: string, beverage: string }[] = [];

  startOrderInquiry() {
    this.orderInquiryActive = true;
  }

  placeOrder() {
    if (this.selectedBeverage) {
      this.customerOrders.push({ customerName: this.customerName, beverage: this.selectedBeverage });
      this.selectedBeverage = '';
    }
  }

  get orderSummaryVisible() {
    return this.customerOrders.length > 0;
  }
}