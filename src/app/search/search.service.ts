import { Injectable } from '@angular/core';
import {IndexedDBService} from '../shared/services/indexeddb';


@Injectable()
export class SearchService {

  constructor(private indexedDBService: IndexedDBService)
  {
  }

  getCustomers() {
    return this.indexedDBService.db.getAll('customer');
  }
}
