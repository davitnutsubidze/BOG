export class BaseProduct {

  constructor(
    public registrationDate: { formatted?: string } = {},
    public endDate: { formatted?: string } = {},
    public price: string = '',
    public currency: string = '',
    public productType: ProductTypeEnum = ProductTypeEnum.CREDIT_CARD
  ) {  }
}

export class CreditCard extends BaseProduct {

  constructor(
    public cardClass: string = '',
    public cardNumber: string = '',
    public cardName: string = ''
  ) {
    super();
  }
}

export class Loan extends BaseProduct {

  constructor(
    public loanType: string = '',
    public contractNumber: string = '',
    public interestRate: string = '',
    public paymentType: string = ''
  ) {
    super();
  }
}

export class Insurance extends BaseProduct {

  constructor(
    public insuranceType: string = '',
    public insurer: string = '',
    public policyNumber: string = '',
    public insurancePremium: string = '',
    public franchise: string = ''
  ) {
    super();
  }
}

export enum ProductTypeEnum {
  CREDIT_CARD,
  LOAN,
  INSURANCE
}

