import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ContactInformation} from './contact-information'

@Component({
  selector: 'contact-information',
  templateUrl: 'contact-information.component.html',
  styleUrls: ['contact-information.component.css']
})

export class ContactInformationComponent implements OnInit
{
  form: FormGroup;
  @Input() contacts: Array<ContactInformation> = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    var obj = new ContactInformation(598506636, '+99559850663', 'davit@yahoo.com');
    this.contacts.push(obj);
    this.createForms();
  }

  addNewContact(values)
  {
    if (values.phone !== '' || values.fax !== '' || values.email !== '') {
      var obj = new ContactInformation(values.phone, values.fax, values.email);
      this.contacts.push(obj);
    }
  }

  deleteContact(i)
  {
    event.preventDefault();
    if (i > -1) {
      this.contacts.splice(i, 1);
    }
  }

  editContact(i)
  {
    Object.keys(this.contacts[i]).forEach((controlName: string) =>
    {
      this.form.controls[controlName].setValue(this.contacts[i][controlName]);
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
    this.form.reset();
  }

  createForms()
  {
    this.form = new FormGroup({
      phone: new FormControl(""),
      fax: new FormControl(""),
      email: new FormControl(""),
    });
  }

}

