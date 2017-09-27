import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/components/app/app.component';

import { RecoverComponent } from './app/components/users/recover.component';
import { RegisterComponent } from './app/components/users/register.component';
import { LoginComponent } from './app/components/users/login.component';
import { AuthService } from "./app/service/auth.service";


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
            { path: 'User/Recover', component: RecoverComponent },//:id
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