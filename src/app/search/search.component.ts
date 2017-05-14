/**
 * Created by David on 5/9/2017.
 */
import { Component, OnInit } from '@angular/core';
import {IndexedDBService} from '../shared/services/indexeddb'
import {IMyOptions} from 'mydatepicker';
import {SearchService} from './search.service';
import {Customer, ICustomer} from '../customer/customer';
import {SearchPipe} from './search.pipe';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: [ './search.component.css' ]
})

export class SearchComponent implements OnInit {
  customers: Array<Customer> = [];
  jsonData: any;
  filterCustomer = new Customer();

  // private myDatePickerOptions: IMyOptions = {
  //   todayBtnTxt: 'Today',
  //   dateFormat: 'dd.mm.yyyy'
  // };
  //
  // private model: Object = {date: {year: 2018, month: 10, day: 9}};

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolvedData: any) => {
      this.jsonData = resolvedData.jsonData[0];
    });

    this.getCustomers();
  }

  getCustomers() {
    this.searchService.getCustomers().then((customers: Array<ICustomer>) => {
      this.customers = customers.map((customer: ICustomer) => {
        return new Customer(customer);
      });


      console.log(this.customers);
    }, (error) => {
      console.log(error);
    });
  }

  onChange() {
    console.log(this.filterCustomer);
  }
}
