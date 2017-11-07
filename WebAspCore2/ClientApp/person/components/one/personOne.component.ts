import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
    selector: 'personOne',
    templateUrl: 'personOne.component.html',
    styleUrls: [ 'personOne.component.scss']
})
export class PersonOneComponent {

    onSubmit(ngForm: NgForm) {
        alert(ngForm);
        console.log(ngForm);
    }
}
