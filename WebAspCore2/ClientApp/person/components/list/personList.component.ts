import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { UserService } from "../../service/user.service";
import { UserRole } from "../../model/UserRole";

@Component({
    selector: 'personList',
    templateUrl: 'personList.component.html',
    styleUrls: [ 'personList.component.scss']
})
export class PersonListComponent {

    activeRole: UserRole;
    constructor(private authService: AuthService, private userService: UserService) {
        this.activeRole = userService.getUserRoles();
    }

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

    onLoginAdmin() {
        this.authService.login('admin', '123');
        this.activeRole = this.userService.getUserRoles();
    }
    onLogin() {
        this.authService.login('client', '123');
        this.activeRole = this.userService.getUserRoles();
    }
    onLogout() {
        this.authService.logout();
        this.activeRole = this.userService.getUserRoles();
    }

}