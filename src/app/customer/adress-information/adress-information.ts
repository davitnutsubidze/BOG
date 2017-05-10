/**
 * Created by David on 5/9/2017.
 */
import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AdressInf} from './adress'

@Component({

  selector: 'adress-information',
  templateUrl: './adress-information.html',
  styleUrls: ['./adress-information.css']

})

export class AdressInformation
{

  form;
  @Input() adressArr = [];
  selectedIndex: number;

  constructor()
  {
  }

  ngOnInit()
  {
    var obj = new AdressInf('Tbilisi', 'Qsani Str', 11124);
    this.adressArr.push(obj);
    this.clearForms();
  }

  addNewAdress(values)
  {
    if (values.city !== '' || values.street !== '' || values.postal !== '') {
      var obj = new AdressInf(values.city, values.street, values.postal);
      this.adressArr.push(obj);
    }
    this.clearForms();
  }

  deleteAdress(i)
  {
    event.preventDefault();
    if (i > -1) {
      this.adressArr.splice(i, 1);
    }
    this.clearForms();
  }

  editAdress(i)
  {
    this.form = new FormGroup({
      city: new FormControl(this.adressArr[i].city),
      street: new FormControl(this.adressArr[i].street),
      postal: new FormControl(this.adressArr[i].postal),
    });
    this.selectedIndex = i;
  }

  updateAdress(values)
  {
    let i = this.selectedIndex;
    this.adressArr[i] = new AdressInf(values.city, values.street, values.postal);
  }

  clearForms()
  {
    this.form = new FormGroup({
      city: new FormControl(""),
      street: new FormControl(""),
      postal: new FormControl(""),
    });
  }

}

