import { Money } from './money';

export class ExchangeRate {
    ExchangeRateID: number;
    Value: number;
    Money: Money;
    ExchangeRateType: ExchangeRateType;
}

enum ExchangeRateType {
    General = 1,
    Holiday = 2,
}