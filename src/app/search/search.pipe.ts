import {Pipe, PipeTransform} from '@angular/core';
import {Customer} from '../customer/customer';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform
{
  transform(items: Array<Customer>, customer: Customer)
  {
    console.log(items, customer);
    return items
      .filter((item: Customer) => { return item.personalId.indexOf(customer.personalId) !== -1 })
      .filter((item: Customer) => { return item.name.indexOf(customer.name) !== -1 })
      .filter((item: Customer) => { return item.lastName.indexOf(customer.lastName) !== -1 })
      .filter((item: Customer) => { return item.gender.indexOf(customer.gender) !== -1 })
      .filter((item: Customer) => { return item.maritalStatus.indexOf(customer.maritalStatus) !== -1 })
      .filter((item: Customer) => { return item.education.indexOf(customer.education) !== -1 });
  }
}