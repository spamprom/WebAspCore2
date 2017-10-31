import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appCustomerStrucure]'
})
export class CustomerStrucureDirective {

    constructor(private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef)
    {

    }
    @Input()
    set appCustomerStrucure(condition: boolean) {
        if (!condition)
        {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else
        {
            this.viewContainerRef.clear();
        }
    }
}