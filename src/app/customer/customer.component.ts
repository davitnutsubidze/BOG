/**
 * Created by David on 5/9/2017.
 */
import { Component, OnInit, Directive } from '@angular/core';
import { Customer }    from '../shared/customer';
import { ContactInformation } from './contact-information/contact-information';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.css' ]
})
export class CustomerComponent implements OnInit {

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }
  ngOnInit(): void {

  }
}
