import { Directive, ElementRef, HostListener, HostBinding, OnChanges, Input  } from '@angular/core';

//var jQurr = $;
//declare var $: any;
@Directive({
    selector: '[appCustomerInput]'
})
export class CustomerDirective implements OnChanges {

    

    ngOnChanges(): void {//changes: SimpleChanges
        this.borderColor = this.appCustomerInput;
        //alert(jQurr)
    }

    borderColor = 'black';
    opacity = 1;
    constructor(el: ElementRef) {
        //alert($(el).length);
        //el.nativeElement.style.backgroundColor = 'yellow';
    }

    @Input() appCustomerInput: string;


    @HostListener('focus')
    onMouseDown() {
        this.borderColor = this.appCustomerInput;
        this.opacity = 0.1;
    }

    @HostListener('focusout')
    onMouseUp() {
        this.borderColor = this.appCustomerInput;
        this.opacity = 0.5;
    }

    @HostBinding('style.borderColor')
    get setBorderColor() {
        return this.borderColor;
    }

    @HostBinding('style.opacity')
    get setOpacity() {
        return this.opacity;
    }
}