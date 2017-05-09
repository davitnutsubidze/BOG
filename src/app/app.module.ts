import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactInformation } from './customer/contact-information/contact-information';
import { AdressInformation } from './customer/adress-information/adress-information';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    SearchComponent,
    ContactInformation,
    AdressInformation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
