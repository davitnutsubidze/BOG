/**
 * Created by David on 5/9/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddressInformation} from './address-information'

@Component({
  selector: 'address-information',
  templateUrl: 'address-information.component.html',
  styleUrls: ['address-information.component.css']
})

export class AddressInformationComponent implements OnInit
{
  form: FormGroup;
  @Input() addresses: Array<AddressInformation> = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    this.createForms();
  }

  addNewAdress(values: AddressInformation)
  {
    if (values.city !== '' || values.street !== '' || values.postal !== null) {
      var obj = new AddressInformation(values.city, values.street, values.postal);
      this.addresses.push(obj);
    }
  }

  deleteAdress(i)
  {
    event.preventDefault();
    if (i > -1) {
      this.addresses.splice(i, 1);
    }
  }

  editAdress(i)
  {
    Object.keys(this.addresses[i]).forEach((controlName: string) =>
    {
      this.form.controls[controlName].setValue(this.addresses[i][controlName]);
    });
    this.selectedIndex = i;
  }

  updateAdress(values)
  {
    let i = this.selectedIndex;
    this.addresses[i] = new AddressInformation(values.city, values.street, values.postal);
  }

  clearForms()
  {
    this.form.reset();
  }

  createForms()
  {
    this.form = new FormGroup({
      city: new FormControl(""),
      street: new FormControl(""),
      postal: new FormControl(""),
    });
  }

}

