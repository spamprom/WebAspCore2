import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    public currentCount = 0;
    public myNgModel = '888';
    public incrementCounter() {
        this.currentCount++;
        if (this.currentCount > 10) {
            this.bigNumber.emit('vv ' + this.currentCount);
        }
    }

    public isWorkBtn(): boolean {
        return false;//this.currentCount > 3;
    }

    @Input() customerPropBinde: string = "dddd";
    @Output() bigNumber = new EventEmitter<string>();
}