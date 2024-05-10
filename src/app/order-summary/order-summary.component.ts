import { Time } from '@angular/common';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  @Input() customerOrders: { customerName: string, beverage: string }[] = [];

  myDate: Date = new Date()

  showReview:boolean=false

  customerReview(){
    this.showReview=true
  }

  showPerformanceActive: boolean = false;

  showPerformance() {
    this.showPerformanceActive = true;
  }
}