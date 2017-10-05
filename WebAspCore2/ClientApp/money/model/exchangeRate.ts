import { Money } from './money';
import { ExchangeRateTypeEnum } from './exchangeRateTypeEnum';

export class ExchangeRate {
    exchangeRateID: number;
    value: number;
    money: Money;
    exchangeRateType: ExchangeRateTypeEnum = ExchangeRateTypeEnum.General;
    day: Date;
}

