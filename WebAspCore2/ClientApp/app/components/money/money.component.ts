import { Component, AfterViewInit } from '@angular/core';
import { Money } from "../../model/money";
import { MoneyService } from '../../service/money.service';
import { Router } from "@angular/router";

@Component({
    selector: 'money-one',
    templateUrl: './money.component.html',
    providers: [MoneyService]
})
export class MoneyComponent implements AfterViewInit {
    moneys: Money[];
    selectedMoney: Money;

    constructor(private moneyService: MoneyService, private router: Router) { }

    getMoneys(): void {
        this.moneyService
            .getMoneys()
            .then(row => { this.moneys = row; });
    }
    onSelectMoney(moneyId: string) {
        this.router.navigate(['/money/', moneyId]);
    }
    
    ngAfterViewInit() {
        this.getMoneys();
    }
}
