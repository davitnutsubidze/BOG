import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ContactInformation} from './contact-information'

@Component({
  selector: 'contact-information',
  templateUrl: 'contact-information.component.html',
  styleUrls: ['contact-information.component.css']
})

export class ContactInformationComponent
{
  form;
  @Input() contacts = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    var obj = new ContactInformation(598506636, '+99559850663', 'davit@yahoo.com');
    this.contacts.push(obj);
    this.clearForms();
  }

  addNewContact(values)
  {
    if (values.phone !== '' || values.fax !== '' || values.email !== '') {
      var obj = new ContactInformation(values.phone, values.fax, values.email);
      this.contacts.push(obj);
    }
    this.clearForms();
  }

  deleteContact(i)
  {
    event.preventDefault();
    if (i > -1) {
      this.contacts.splice(i, 1);
    }
    this.clearForms();
  }

  editContact(i)
  {
    this.form = new FormGroup({
      phone: new FormControl(this.contacts[i].phone),
      fax: new FormControl(this.contacts[i].fax),
      email: new FormControl(this.contacts[i].email),
    });
    this.selectedIndex = i;
  }

  updateContact(values)
  {
    let i = this.selectedIndex;
    this.contacts[i] = new ContactInformation(values.phone, values.fax, values.email);
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

