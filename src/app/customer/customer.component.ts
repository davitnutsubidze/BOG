/**
 * Created by David on 5/9/2017.
 */
import { Component, OnInit} from '@angular/core';
import { Customer }    from '../shared/customer';
import {IMyOptions} from 'mydatepicker';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: [ './customer.component.css' ]
})
export class CustomerComponent implements OnInit {

  contactArr = [];
  adressArr = [];
  submited: boolean = false;
  customer = {
    name: '',
    lastname: '',
    personalid: '',

  };

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }
  ngOnInit(): void {
    console.log(this.customer);
  }

  validation(value) {
    console.log(value);
    if(this.submited && value === ''){
      return false
    }
    else{
      return true
    }

  }
  addCustomer() {
    this.submited = true;
    // console.log("save");
    // console.log(this.contactArr);
    // console.log(this.adressArr);
  }
}
