import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-beverage-selection',
  templateUrl: './beverage-selection.component.html',
  styleUrls: ['./beverage-selection.component.css']
})
export class BeverageSelectionComponent {
onBeverageSelected($event: Event) {
throw new Error('Method not implemented.');
}


  beverages: string[] = ['Coffee', 'Tea', 'Juice', 'Soda','Beer','sambaram','juice'];
  selectedBeverage: string = '';
  //hii
  @Input() 
  orderInquiryActive: boolean=false;



  beverageOrder(data:boolean){
    this.orderInquiryActive=data
  }
  @Output()ordersUpdated =new EventEmitter<string>()



  sendBevarge(){
    this.ordersUpdated.emit(this.selectedBeverage);
     console.log(this.selectedBeverage);
  
  }


  }

 


