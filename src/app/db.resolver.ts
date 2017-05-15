import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {IndexedDBService} from './shared/services/indexeddb';

@Injectable()
export class DBResolver implements Resolve<any>
{
  constructor(private indexedDBService: IndexedDBService)
  {
  }

  resolve()
  {
    return this.indexedDBService.create().then(() =>
    {
      return true;
    });
  }
}
