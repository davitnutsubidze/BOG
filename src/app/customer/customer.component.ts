import {Component, OnInit} from '@angular/core';
import {IMyOptions} from 'mydatepicker';
import {CustomerService} from './customer.service';
import {Customer} from './customer';
import {FormGroup, FormControl, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
  submitted: boolean = false;
  form: FormGroup;
  customer: Customer = new Customer();
  jsonData: any;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService)
  {
  }

  ngOnInit()
  {
    this.activatedRoute.data.subscribe((resolvedData: any) =>
    {
      this.jsonData = resolvedData.jsonData[0];
    });

    this.createForm();
  }

  validateControl(control: AbstractControl, controlName: string)
  {
    if (control.value === '' || control.value === null || (Array.isArray(control.value) && !control.value.length)) {
      return {
        required: this.jsonData[controlName] && this.jsonData[controlName].errors && this.jsonData[controlName].errors.required
      }
    }

    return null;
  }

  createForm()
  {
    let form = new FormGroup({});

    this.customer.getNewCustomerFields().forEach((controlName: any) =>
    {
      form.addControl(controlName, new FormControl(this.customer[controlName], (control: AbstractControl) =>
      {
        return this.validateControl(control, controlName);
      }));
    });

    this.form = form;
  }

  showError(name: string)
  {
    return this.form.controls[name] && this.getError(name) && this.submitted;
  }

  getError(name: string)
  {
    return this.form.controls[name].errors && this.form.controls[name].errors['required'];
  }

  addCustomer()
  {
    this.form.controls['contacts'].updateValueAndValidity();
    this.form.controls['addresses'].updateValueAndValidity();
    if (this.form.valid) {
      this.customerService.add(this.form.value).then(() =>
      {
        alert("Successfully saved");
      }, (error) =>
      {
        alert(error.target.error.message);
      })
    }
    else {
      let alertMessage = this.getError("contacts") || this.getError("addresses");
      if (alertMessage) {
        alert(alertMessage);
      }
    }
    this.submitted = true;
  }

}
