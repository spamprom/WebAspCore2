import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';

import { MainComponent } from './app/components/app/main.component';
import { DashboardComponent } from "./app/components/dashboard/dashboard.component";
import { MoneyComponent } from "./app/components/money/money.component";
import { MoneyShortComponent } from "./app/components/money/moneyShort.component";

@NgModule({
    bootstrap: [
        MainComponent
    ],
    declarations: [
        MainComponent, DashboardComponent, MoneyComponent, MoneyShortComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'money', component: MoneyComponent },
            { path: '**', redirectTo: 'dashboard' }
        ])
    ],
    exports: [RouterModule],
    providers: [
        
    ]
})
export class AppModuleMain {
    public isWork(): void {
        //require.ensure([], function (req) {
        //    let objReq = req('./myScript');

        //    objReq.dfdfdf();
        //    objReq();
        //}, 'jsServerName');
    }
}