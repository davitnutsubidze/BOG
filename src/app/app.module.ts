import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import {SearchPipe} from './search/search.pipe'

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactInformationComponent } from './customer/contact-information/contact-information.component';
import { AddressInformationComponent } from './customer/address-information/address-information.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import {IndexedDBService} from './shared/services/indexeddb'

import { AppRoutingModule }     from './app-routing.module';
import {CustomerResolver} from './customer/customer.resolver';
import {DBResolver} from './db.resolver';
import {SearchModalsComponent} from './search/modals/search-modals.component';
import {ProductResolver} from './product/product.resolver';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    SearchComponent,
    ContactInformationComponent,
    AddressInformationComponent,
    SearchPipe,
    SearchModalsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDatePickerModule,
    Ng2OrderModule
  ],
  providers: [IndexedDBService, CustomerResolver, ProductResolver, IndexedDBService, DBResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
