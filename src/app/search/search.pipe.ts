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

    return items
      .filter((item: Customer) => { return item.personalId.indexOf(customer.personalId) !== -1 })
      .filter((item: Customer) => { return item.name.toLowerCase().indexOf(customer.name.toLowerCase()) !== -1 })
      .filter((item: Customer) => { return item.lastName.toLowerCase().indexOf(customer.lastName.toLowerCase()) !== -1 })
      .filter((item: Customer) => { return item.gender.indexOf(customer.gender) !== -1 })
      .filter((item: Customer) => {
        if(customer.birthDate !== null) {
          return item.birthDate.formatted.indexOf(customer.birthDate.formatted) !== -1 || customer.birthDate.formatted === undefined
        }
        else{
          return item
        }
      })
      .filter((item: Customer) => { return item.maritalStatus.indexOf(customer.maritalStatus) !== -1 })
      .filter((item: Customer) => { return item.education.indexOf(customer.education) !== -1 });
  }
}
