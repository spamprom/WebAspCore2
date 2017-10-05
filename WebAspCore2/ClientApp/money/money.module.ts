import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MoneyRouting } from "./money.routing";
import { AppComponent } from "./components/main_component/app.component";
import { MoneyListComponent } from "./components/list/moneyList.component";
import { MoneyDataComponent } from "./components/data/moneyData.component";
import { MoneyShortComponent } from "./components/list/moneyShort.component";


@NgModule({
    declarations: [
        AppComponent, MoneyListComponent, MoneyDataComponent, MoneyShortComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        MoneyRouting
    ],
    exports: [RouterModule]
})
export class UserModule {
    
}