import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent {
  @Input() customerName: string | undefined;
  @Input() selectedBeverage: string | undefined;
  @Input() customerOrders: { customerName: string; beverage: string; }[] = [];
  @Input() orderInquiryActive: boolean = false;

  @Output() ordersUpdated = new EventEmitter<{ customerName: string; beverage: string; }[]>();

  constructor() {}

  placeOrder() {
    console.log('placeOrder',this.customerName,this.selectedBeverage);
    if (this.customerName && this.selectedBeverage) {
      this.customerOrders.push({ customerName: this.customerName, beverage: this.selectedBeverage });
      this.ordersUpdated.emit(this.customerOrders);
    
      
    }
  }
}
