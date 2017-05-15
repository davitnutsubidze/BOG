import {ContactInformation} from './contact-information/contact-information';
import {AddressInformation} from './address-information/address-information';
import {BaseProduct} from '../product/product';

export interface ICustomer {
  name: string;
  lastName: string;
  personalId: string;
  birthDate: { formatted?: string};
  gender: string;
  maritalStatus: string;
  education: string;
  contacts: Array<ContactInformation>;
  addresses: Array<AddressInformation>;
  products: Array<BaseProduct>;
}

export class Customer implements ICustomer {
  name: string;
  lastName: string;
  personalId: string;
  birthDate: { formatted?: string};
  gender: string;
  maritalStatus: string;
  education: string;
  contacts: Array<ContactInformation>;
  addresses: Array<AddressInformation>;
  products: Array<BaseProduct>;

  constructor(
    entity: ICustomer = <ICustomer>{}
  ) {
    this.name = entity.name || '';
    this.lastName = entity.lastName || '';
    this.personalId = entity.personalId || '';
    this.birthDate = entity.birthDate || {};
    this.gender = entity.gender || '';
    this.maritalStatus = entity.maritalStatus || '';
    this.education = entity.education || '';
    this.contacts = entity.contacts || [];
    this.addresses = entity.addresses || [];
    this.products = entity.products || [];
  }

  getNewCustomerFields() {
    return Object.keys(this).filter((fieldName) => {
      return fieldName !== 'products';
    })
  }
}
