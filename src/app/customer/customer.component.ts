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
    parentname: '',
    gender: '',
    birhdate: '',
    materialstatus: '',
    education: ''
  };

  private myDatePickerOptions: IMyOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd.mm.yyyy'
  };

  private model: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }
  ngOnInit(): void {
    window.localStorage.setItem("name","111");
    localStorage.setItem('whatever', 'something');
  }

  validation(value) {
    // console.log(value);
    if(this.submited && value === ''){
      return false
    }
    else{
      return true
    }

  }
  addCustomer() {
    this.submited = true;
    localStorage.setItem("name2","david2");

  }
}
