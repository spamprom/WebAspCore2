import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MoneyRouting } from "./money.routing";
import { AppComponent } from "./components/main_component/app.component";
import { MoneyListComponent } from "./components/list/moneyList.component";
import { MoneyDataComponent } from "./components/data/moneyData.component";
import { MoneyShortComponent } from "./components/list/moneyShort.component";
import { MoneyService } from "./service/money.service";


@NgModule({
    declarations: [
        AppComponent, MoneyListComponent, MoneyDataComponent, MoneyShortComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        MoneyRouting
    ],
    exports: [RouterModule],
    providers: [MoneyService]
})
export class MoneyModule {
    
}