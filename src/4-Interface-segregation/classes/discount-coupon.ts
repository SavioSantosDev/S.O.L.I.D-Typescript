export class DiscountCoupon {
  constructor(private readonly discount: number) {}

  calculate(originalValue: number): number {
    return originalValue - originalValue * (this.discount / 100);
  }
}
