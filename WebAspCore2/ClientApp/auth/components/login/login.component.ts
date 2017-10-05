import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from "../../model/Login";
import { AuthService } from "../../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router, private authService: AuthService) {
    }
    login: Login = new Login();
    hasError: boolean = false;
    startLogin: boolean = false;

    public onLogin(): void {
        this.hasError = false;

        if (this.login.userName == null || this.login.password == null) {
            this.hasError = true;
        } else {
            this.startLogin = true;
                
            this.authService.login(this.login).then(res => {
                if (res) {
                    this.hasError = false;
                    //this.router.navigate(['/User', 'Home']);
                    document.location.href = '/';
                }
                else {
                    this.hasError = true;
                    this.startLogin = false;
                }
            });
        }
        //
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');

        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
}

