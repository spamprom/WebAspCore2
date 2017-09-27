import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';

import { MoneyService } from './app/service/money.service';

import { AppComponent } from './app/components/app/app.component';
import { NavMenuComponent } from './app/components/navmenu/navmenu.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { LoginComponent } from './app/components/users/login.component';
//import { CounterComponent } from './components/counter/counter.component';
import { MoneyComponent } from "./app/components/money/money.component";
import { MoneyShortComponent } from "./app/components/money/moneyShort.component";


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
       // CounterComponent,
        LoginComponent,
        DashboardComponent,
        MoneyComponent,
        MoneyShortComponent
    ],
    providers: [MoneyService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule//,
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        //    { path: 'dashboard', component: DashboardComponent },
        //    //{ path: 'counter', component: CounterComponent },
        //    { path: 'User/Login', component: LoginComponent },
        //    { path: '**', redirectTo: 'dashboard' }
        ////])
    ]//,
   // exports: [RouterModule]
})
export class AppModuleShared {
}
