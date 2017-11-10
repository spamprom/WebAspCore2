import { Component } from '@angular/core';
import { ComponentCanDeactivate } from "../../guards/away.guard";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'personItem',
    templateUrl: 'personItem.component.html',
    styleUrls: [ 'personItem.component.scss']
})
export class PersonItemComponent implements ComponentCanDeactivate {
    canDeactivate(): (boolean | Observable<boolean> | Promise<boolean>) {
        return confirm('Yes?');
    }
    
}