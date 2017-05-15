/**
 * Created by David on 5/9/2017.
 */
import {Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {Customer, ICustomer} from '../customer/customer';
import {ActivatedRoute} from '@angular/router';
import {CreditCard, Insurance, Loan} from '../product/product';
@Component({
  selector: 'product',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit
{
  customers: Array<Customer> = [];
  jsonData: any;
  filterCustomer = new Customer();
  selectedCustomer = new Customer();
  selectedProduct: CreditCard | Loan | Insurance;


  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService)
  {
  }

  ngOnInit()
  {
    this.activatedRoute.data.subscribe((resolvedData: any) =>
    {
      this.jsonData = resolvedData.jsonData[0];
    });

    this.getCustomers();
  }

  getCustomers()
  {
    this.searchService.getCustomers().then((customers: Array<ICustomer>) =>
    {
      this.customers = customers.map((customer: ICustomer) =>
      {
        return new Customer(customer);
      });
    }, (error) =>
    {
      console.log(error);
    });
  }

  selectCustomer(customer: Customer)
  {
    this.selectedCustomer = customer;
  }

  selectProduct(customer: Customer,productIndex: string)
  {
    this.selectedProduct = customer.products[productIndex];
  }

}
