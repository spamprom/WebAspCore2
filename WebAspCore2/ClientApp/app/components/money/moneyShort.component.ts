import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Money } from "../../model/money";

@Component({
    selector: 'money-short',
    templateUrl: './moneyShort.component.html'
})
export class MoneyShortComponent {
    //public currentCount = 0;
    
    public incrementCounter() {
        //this.currentCount++;
        //if (this.currentCount > 10) {
        //    this.bigNumber.emit('vv ' + this.currentCount);
        //}
    }

    public isWorkBtn(): boolean {
        return false;//this.currentCount > 3;
    }
    @Output() bigNumber = new EventEmitter<string>();
    @Input() moneyProp: Money = new Money();
}
//