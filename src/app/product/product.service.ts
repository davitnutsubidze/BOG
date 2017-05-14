import { Injectable } from '@angular/core';
import {IndexedDBService} from '../shared/services/indexeddb';
import {Customer} from '../customer/customer';


@Injectable()
export class ProductService {
  constructor(private indexedDBService: IndexedDBService)
  {
  }


  getCustomerByPersonalId(id: string) {
    return this.indexedDBService.db.getByIndex('customer', 'personalId', id)
  }

  updateCustomer(customer: Customer) {
    return this.indexedDBService.db.update('customer', customer);
  }
}
