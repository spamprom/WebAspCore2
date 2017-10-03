import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { Money } from "../../model/money";

@Component({
    selector: 'money-short',
    templateUrl: './moneyShort.component.html',
    styleUrls: ['./moneyShort.component.scss']
})
export class MoneyShortComponent {

    constructor(private router: Router) {
    }

    public clickOneMoney(monId: string) {
        if (monId != null) {
            //this.onSelectMoney.emit(monId);
            this.router.navigate(['/dashboard'], { queryParams: { 'isSuccess': monId } });
        }
    }

    @Output() onSelectMoney = new EventEmitter<string>();
    @Input('moneys') moneys: Money[];
}
