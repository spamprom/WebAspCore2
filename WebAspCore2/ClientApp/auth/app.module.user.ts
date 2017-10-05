import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AuthService } from "./service/auth.service";
import { AppComponent } from "./components/main_component/app.component";
import { LoginComponent } from "./components/login/login.component";
import { RecoverComponent } from "./components/recover/recover.component";
import { RegisterComponent } from "./components/register/register.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent, LoginComponent, RecoverComponent, RegisterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/User/Login', pathMatch: 'full' },
            { path: 'User/Login', component: LoginComponent },
            { path: 'User/Recover', component: RecoverComponent },
            { path: 'User/Register', component: RegisterComponent },
            { path: '**', redirectTo: 'User/Login' }
        ])
    ],
    exports: [RouterModule],
    providers: [
        AuthService
    ]
})
export class AppModuleUser {
    public isWork(): void {
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');

        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
}