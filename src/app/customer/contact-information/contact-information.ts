/**
 * Created by David on 5/9/2017.
 */
import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ContactInf} from './contact'

@Component({

  selector: 'contact-information',
  templateUrl: './contact-information.html',
  styleUrls: ['./contact-information.css']

})

export class ContactInformation
{
  form;
  @Input() contactArr = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    var obj = new ContactInf(598506636, '+99559850663', 'davit@yahoo.com');
    this.contactArr.push(obj);
    this.clearForms();
  }

  addNewContact(values)
  {
    if (values.phone !== '' || values.fax !== '' || values.email !== '') {
      var obj = new ContactInf(values.phone, values.fax, values.email);
      this.contactArr.push(obj);
    }
    this.clearForms();
  }

  deleteContact(i)
  {
    event.preventDefault();
    if (i > -1) {
      this.contactArr.splice(i, 1);
    }
    this.clearForms();
  }

  editContact(i)
  {
    this.form = new FormGroup({
      phone: new FormControl(this.contactArr[i].phone),
      fax: new FormControl(this.contactArr[i].fax),
      email: new FormControl(this.contactArr[i].email),
    });
    this.selectedIndex = i;
  }

  updateContact(values)
  {
    let i = this.selectedIndex;
    this.contactArr[i] = new ContactInf(values.phone, values.fax, values.email);
  }

  clearForms()
  {
    this.form = new FormGroup({
      phone: new FormControl(""),
      fax: new FormControl(""),
      email: new FormControl(""),
    });
  }
}

