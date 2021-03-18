import {
  EnterpriseCustumerProtocol,
  IndividualCustumerProtocol,
} from '../models/customer';

export class IndividualCustumer implements IndividualCustumerProtocol {
  constructor(
    public name: string,
    public lastName: string,
    public cpf: string,
  ) {}
}

export class EnterpriseCustumer implements EnterpriseCustumerProtocol {
  constructor(public name: string, public cnpj: string) {}
}
