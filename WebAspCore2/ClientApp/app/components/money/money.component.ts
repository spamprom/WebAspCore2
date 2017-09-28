import { Component, AfterViewInit } from '@angular/core';
import { Money } from "../../model/money";
import { MoneyService } from '../../service/money.service';

@Component({
    selector: 'money-one',
    templateUrl: './money.component.html',
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

    myCallback(eee: string) {
        alert(eee);
    }

    //private dfdfdf: number;
    //private isAM(): any {
    //    return 'dfdfdf';sdsd
    //}
    //private readonly fffddf = "";
    //private counnn()
    //{
    //    this.dfdfdf = this.isAM().length;
    //    alert(this.dfdfdf)
    //}
    //private testValrrr: number = 0;
    //public outerFunc() {
    //    var a = 5;
    //    function innerFFF() {
    //        var a = 6;
    //        function deepInner() {
    //            alert(a);
    //            //testVal = 4;
    //        }
    //        deepInner();
    //        //alert(testVal);
    //    }

    //    innerFFF();
    //    alert(this.testValrrr);
    //}
    ngAfterViewInit() {
        //this.getMoneys();

        //alert(this.moneys.length)
        //let eee: ExchangeRate = new ExchangeRate();
        //alert(eee.ExchangeRateType);
        //this.outerFunc();
    }
    //counnn();
    //constructor

}
