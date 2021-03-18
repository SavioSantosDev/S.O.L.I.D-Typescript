export interface Customer {
  name: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

// A interface acima contém atributos que podem ser utilizados por pessoas físicas ou
// pessoas jurídicas. Em ambos os casos forçam as classes implementar alguns atributos
// que não vão ser utilizados, quebranco o princípio da segragação de interface.

export interface IndividualCustumerProtocol {
  name: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustumerProtocol {
  name: string;
  cnpj: string;
}
