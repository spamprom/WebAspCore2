import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';

import { MainComponent } from './app/components/app/main.component';
import { DashboardComponent } from "./app/components/dashboard/dashboard.component";
import { MoneyShortComponent } from "./app/components/money/list/moneyShort.component";
import { MoneyDataComponent } from "./app/components/money/data/moneyData.component";
import { NotFoundComponent } from "./app/components/dashboard/notFound.component";
import { MoneysComponent } from "./app/components/money/moneys.component";

import { MONEY_CHILD_ROUTES } from "./app/components/money/money.routes";
import { MoneyListComponent } from "./app/components/money/list/moneyList.component";

@NgModule({
    bootstrap: [
        MainComponent
    ],
    declarations: [
        MainComponent, DashboardComponent, MoneyShortComponent, MoneyDataComponent, NotFoundComponent, MoneysComponent, MoneyListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },

            { path: 'moneys', component: MoneysComponent, children: MONEY_CHILD_ROUTES }, 

            { path: '404', component: NotFoundComponent },
            { path: '**', redirectTo: '/404' }
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