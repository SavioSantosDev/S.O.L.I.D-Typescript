import { IDiscount } from '../models/i-discount';

export class DiscountCoupon implements IDiscount {
  constructor(private readonly discount: number) {}

  calculate(originalValue: number): number {
    return originalValue - originalValue * (this.discount / 100);
  }
}
