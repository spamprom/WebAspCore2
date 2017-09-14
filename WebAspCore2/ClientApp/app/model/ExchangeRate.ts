import { Money } from './money';

export class ExchangeRate {
    ExchangeRateID: number;
    Value: number;
    Money: Money;
    ExchangeRateType: ExchangeRateTypeEnum = ExchangeRateTypeEnum.General;
    Day: Date;
}

enum ExchangeRateTypeEnum  {
    General = 1,
    Holiday = 2,
}