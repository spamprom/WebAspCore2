import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MoneyListComponent } from "./components/list/moneyList.component";
import { MoneyDataComponent } from "./components/data/moneyData.component";
import { AppComponent } from "./components/main_component/app.component";

const MONEY_CHILD_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children: [
                { path: '', component: MoneyListComponent },
                { path: ':id', component: MoneyDataComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(MONEY_CHILD_ROUTES)],
    exports: [RouterModule]
})
export class MoneyRouting {

}