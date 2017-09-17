import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Money } from "../../model/money";

@Component({
    selector: 'money-short',
    templateUrl: './moneyShort.component.html'
})
export class MoneyShortComponent {

    //public currentCount = 0;

    public clickOneMoney(monId: string) {
        //this.currentCount++;
        if (monId != null) {
            this.selectMoney.emit(monId);
        }
    }

    public isWorkBtn(): boolean {
        return false;//this.currentCount > 3;
    }
    @Output() selectMoney = new EventEmitter<string>();
    @Input() moneyProp: Money = new Money();
}
//