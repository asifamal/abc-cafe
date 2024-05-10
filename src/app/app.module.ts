import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcCafeComponent } from './abc-cafe/abc-cafe.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { OrderInquiryComponent } from './order-inquiry/order-inquiry.component';
import { BeverageSelectionComponent } from './beverage-selection/beverage-selection.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CustomerreviewcomponentComponent } from './customerreviewcomponent/customerreviewcomponent.component';
import { PerformanceComponentComponent } from './performance-component/performance-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcCafeComponent,
    CounterComponent,
    OrderInquiryComponent,
    BeverageSelectionComponent,
    OrderPlacementComponent,
    OrderSummaryComponent,
    CustomerreviewcomponentComponent,
    PerformanceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
