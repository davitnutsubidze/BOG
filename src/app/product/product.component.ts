/**
 * Created by David on 5/9/2017.
 */
import {Component, OnInit} from '@angular/core';
import {IMyOptions} from 'mydatepicker'
import {IndexedDBService} from '../shared/services/indexeddb'
import {FormGroup, AbstractControl, FormControl} from '@angular/forms';
import {ProductService} from './product.service';
import {Customer, ICustomer} from '../customer/customer';
import {ProductTypeEnum, CreditCard, Loan, Insurance, BaseProduct} from './product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  providers: [ProductService],
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  customer: Customer = new Customer();
  form: FormGroup;
  myDatePickerOptions: IMyOptions = {
    editableDateField: false
  };

  constructor(private productService: ProductService)
  {
  }

  ngOnInit()
  {
    this.createForm(new CreditCard());
  }

  onProductSelect(productType: ProductTypeEnum)
  {
    let model: CreditCard | Loan | Insurance;
    switch (productType) {
      case ProductTypeEnum.CREDIT_CARD:
        model = new CreditCard();
        break;
      case ProductTypeEnum.LOAN:
        model = new Loan();
        break;
      case ProductTypeEnum.INSURANCE:
        model = new Insurance();
        break;
    }
    model.productType = productType;
    this.createForm(model);
  }

  createForm(model: CreditCard | Loan | Insurance)
  {
    let form = new FormGroup({});
    Object.keys(model).forEach((controlName: any) =>
    {
      form.addControl(controlName, new FormControl(model[controlName], (control: AbstractControl) =>
      {
        return this.validateControl(control, controlName);
      }));
    });

    this.form = form;
  }

  validateControl(control: AbstractControl, controlName: string)
  {
    // if (control.value === '' || control.value === null || (Array.isArray(control.value) && !control.value.length) ) {
    //   return {
    //     required: this.jsonData[controlName] && this.jsonData[controlName].errors && this.jsonData[controlName].errors.required
    //   }
    // }

    return null;
  }

  addProduct()
  {
    if (this.form.valid) {
      this.customer.products.push(this.form.value);
      this.productService.updateCustomer(this.customer).then(() =>
      {
        alert("Successfully saved");
      }, (error) =>
      {
        console.log(error);
      });
    }
  }

  search()
  {
    this.productService.getCustomerByPersonalId(this.customer.personalId).then((customer: ICustomer) =>
    {
      this.customer = new Customer(customer);
      console.log(this);
    });
  }
}
