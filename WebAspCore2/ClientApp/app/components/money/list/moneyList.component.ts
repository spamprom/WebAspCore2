import { Component, AfterViewInit } from '@angular/core';
import { Money } from "../../../model/money";
import { MoneyService } from '../../../service/money.service';
import { Router } from "@angular/router";

@Component({
    selector: 'money-list',
    templateUrl: './moneyList.component.html',
    providers: [MoneyService]
})
export class MoneyListComponent implements AfterViewInit {
    moneys: Money[];

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
