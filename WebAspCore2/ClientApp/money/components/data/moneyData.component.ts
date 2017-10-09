import { Component, AfterViewInit  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MoneyService } from "../../service/money.service";
import { Money } from "../../model/money";



@Component({
    selector: 'moneyData',
    templateUrl: 'moneyData.component.html',
    styleUrls: ['moneyData.component.scss']
})
export class MoneyDataComponent implements AfterViewInit  {
    item: Money = new Money();
    private moneyId: string;
    constructor(private moneyService: MoneyService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((param: any) => {
            this.moneyId = param['id'];
        });
    }
    ngAfterViewInit() {
        this.getMoney();
    }
    getMoney(): void {
        this.moneyService
            .getMoney(this.moneyId)
            .then(row => {
                this.item = row;
            });
    }
}

