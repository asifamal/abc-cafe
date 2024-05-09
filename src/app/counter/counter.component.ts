import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  customerName: string = '';
  orderInquiryActive: boolean = false;

  selectedBeverage: string = '';


  customerOrders: { customerName: string; beverage: string; }[] = [];    

  myDate:Date = new Date()
  


  startOrderInquiry() {
    if(this.customerName!==''){
    this.orderInquiryActive = true;}

}
onOrdersUpdated(updatedOrders: { customerName: string; beverage: string; }[]) {
  // Update the parent component's customerOrders array with the emitted value
  this.customerOrders = updatedOrders;
}

updateOrders(orders: { customerName: string; beverage: string; }[]) {
  this.customerOrders = orders;
}
fromBevarge(data:any){
  console.log(data);
this.selectedBeverage=data


}
}
