import {Injectable} from '@angular/core';
import {AngularIndexedDB} from 'angular2-indexeddb';
import {CustomerDB} from '../../customer/customer-db';

@Injectable()
export class IndexedDBService
{
  db = new AngularIndexedDB('BOG', 1);

  constructor()
  {
    console.log('IndexedDBService create');
  }

  create(): Promise<void>
  {
    return this.db.createStore(1, (evt) =>
    {
      CustomerDB.initialize(evt);
    });
  }
}
