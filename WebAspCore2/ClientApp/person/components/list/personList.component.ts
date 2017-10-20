import { Component } from '@angular/core';

@Component({
    selector: 'personList',
    templateUrl: 'personList.component.html',
    styleUrls: [ 'personList.component.scss']
})
export class PersonListComponent {

    constructor() { }

    inputColorPicker = 'white';

    attrInput = '';
    isTextValid()
    {
        if (this.attrInput.length < 10) { return true; }
        else { return false; }
    }


    attrStyle = '';
    currentStyles = {};
    private setStyle() {
        this.currentStyles =
            {
                'font-weight': this.attrStyle.length <= 5 ? 'normal' : 'bold',
                'color': this.attrStyle.length < 5 ? 'black' : 'red'
            };
    }
    onAttrStyleChange() {
        this.setStyle();
    }
}