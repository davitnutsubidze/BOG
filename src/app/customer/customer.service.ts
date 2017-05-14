import { Injectable } from '@angular/core';
import {IndexedDBService} from '../shared/services/indexeddb';
import {Customer, ICustomer} from './customer';


@Injectable()
export class CustomerService {

  constructor(private indexedDBService: IndexedDBService)
  {
  }

  add(customer: ICustomer) {
    return this.indexedDBService.db.add('customer', new Customer(customer));
  }
}
