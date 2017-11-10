import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ComponentCanDeactivate } from "../../guards/away.guard";
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'personOne',
    templateUrl: 'personOne.component.html',
    styleUrls: [ 'personOne.component.scss']
})
export class PersonOneComponent implements ComponentCanDeactivate {
    canDeactivate(): (boolean | Observable<boolean> | Promise<boolean>) {
        return confirm('Yes?');
    }

    onSubmit(ngForm: NgForm) {
        alert(ngForm);
        console.log(ngForm);
    }
}
