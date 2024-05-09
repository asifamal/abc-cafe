import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-order-inquiry',
  templateUrl: './order-inquiry.component.html',
  styleUrls: ['./order-inquiry.component.css']
})
export class OrderInquiryComponent {

  @Input() customerName: string = '';
  @Input()  orderInquiryActive: boolean = false;


}
