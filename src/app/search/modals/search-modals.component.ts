import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../customer/customer';
import {BaseProduct, CreditCard, Loan, Insurance} from '../../product/product';

@Component({
  selector: 'search-modals',
  templateUrl: 'search-modals.component.html',
  styleUrls: ['search-modals.component.css']
})

export class SearchModalsComponent implements OnInit
{
  @Input() customer: Customer;
  @Input() selectedProduct: CreditCard | Loan | Insurance;

  constructor()
  {
  }

  ngOnInit()
  {

  }

}

