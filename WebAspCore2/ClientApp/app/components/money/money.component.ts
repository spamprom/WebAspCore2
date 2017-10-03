import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Money } from "../../model/money";
import { MoneyService } from '../../service/money.service';

@Component({
    selector: 'money-one',
    templateUrl: './money.component.html',
    encapsulation: ViewEncapsulation.Emulated,
    providers: [MoneyService]
})
export class MoneyComponent implements AfterViewInit {
    moneys: Money[];
    selectedMoney: Money;

    constructor(
        private moneyService: MoneyService) { }

    getMoneys(): void {
        this.moneyService
            .getMoneys()
            .then(row => { this.moneys = row; });
    }

    onSelectMoney(moneyId: string) {
        this.moneyService
            .getMoney(moneyId)
            .then(row => {
                //this.selectedMoney = row;
                alert(row.shortName);
            });
    }
    
    ngAfterViewInit() {
        this.getMoneys();
    }
}
