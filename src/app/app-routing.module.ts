/**
 * Created by David on 5/9/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent }   from './customer/customer.component';
import { ProductComponent }      from './product/product.component';
import { SearchComponent }      from './search/search.component';
import {CustomerResolver} from './customer/customer.resolver';
import {DBResolver} from './db.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/customer', pathMatch: 'full' },
      { path: 'customer',  component: CustomerComponent, resolve: { jsonData: CustomerResolver } },
      { path: 'product', component: ProductComponent },
      { path: 'search', component: SearchComponent, resolve: { jsonData: CustomerResolver } }
    ],
    resolve: [DBResolver]
  },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
