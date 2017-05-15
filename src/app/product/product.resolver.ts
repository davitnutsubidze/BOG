import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class ProductResolver implements Resolve<any>
{
  constructor(private http: Http)
  {

  }

  resolve()
  {
    return Observable.zip(this.http.get('assets/data/product.json').map((response: any) =>
    {
      return response.json();
    })).toPromise().then((data: any) =>
    {
      return data;
    })
  }
}
