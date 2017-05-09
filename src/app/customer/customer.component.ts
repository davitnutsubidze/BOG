/**
 * Created by David on 5/9/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Customer }    from '../shared/customer';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.css' ]
})
export class CustomerComponent implements OnInit {

  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  // Initialized to specific date (09.10.2018).
  private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }
  ngOnInit(): void {

  }
}
