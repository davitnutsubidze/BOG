/**
 * Created by David on 5/9/2017.
 */
import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AddressInformation} from './address-information'

@Component({
  selector: 'address-information',
  templateUrl: 'address-information.component.html',
  styleUrls: ['address-information.component.css']
})

export class AddressInformationComponent
{
  form: FormGroup;
  @Input() addresses: Array<AddressInformation> = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    var obj = new AddressInformation('Tbilisi', 'Qsani Str', 11124);
    this.addresses.push(obj);
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
    Object.keys(this.addresses[i]).forEach((controlName: string) => {
      this.form.controls[controlName].setValue(this.addresses[i][controlName]);
    });
    // this.form.controls
    // this.form = new FormGroup({
    //   city: new FormControl(this.addresses[i].city),
    //   street: new FormControl(this.addresses[i].street),
    //   postal: new FormControl(this.addresses[i].postal),
    // });
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
    // console.log(this.form);
  }

  createForms() {
    this.form = new FormGroup({
      city: new FormControl(""),
      street: new FormControl(""),
      postal: new FormControl(""),
    });
  }

}

