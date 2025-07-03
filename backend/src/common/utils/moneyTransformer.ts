export class MoneyTransformer {
  to(value: number): number {
    // Convert dollars to cents for storage
    return Math.round(value * 100);
  }

  from(value: number): number {
    // Convert cents to dollars for display
    return value / 100;
  }
}
