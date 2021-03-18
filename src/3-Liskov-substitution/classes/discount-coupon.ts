/* export abstract class Discount {
  constructor(protected readonly discount: number) {}

  abstract calculate(originalValue: number): number;
}

export class DiscountCoupon extends Discount {
  calculate(originalValue: number): number {
    return originalValue - originalValue * (this.discount / 100);
  }
}
 */
// No exemplo acima ta tudo certo. Mas abaixo houve uma quebra no principio da substituição de liskov
// pois esperávemos um número mas recebemos um erro, e só saberíamos disso em tempo de execução.

export abstract class Discount {
  constructor(protected readonly discount: number) {}

  calculate(): number {
    throw new Error('Method not implemented!');
  }
}

export class DiscountCoupon extends Discount {}
