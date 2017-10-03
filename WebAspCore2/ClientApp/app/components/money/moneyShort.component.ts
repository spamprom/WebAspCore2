import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Money } from "../../model/money";

@Component({
    selector: 'money-short',
    templateUrl: './moneyShort.component.html',
    styleUrls: ['./moneyShort.component.scss']
})
export class MoneyShortComponent {


    public clickOneMoney(monId: string) {
        if (monId != null) {
            this.onSelectMoney.emit(monId);
        }
    }

    @Output() onSelectMoney = new EventEmitter<string>();
    @Input('moneys') moneys: Money[];
}
