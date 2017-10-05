import { Route, Routes } from "@angular/router";
import { MoneyListComponent } from "./list/moneyList.component";
import { MoneyDataComponent } from "./data/moneyData.component";

export const MONEY_CHILD_ROUTES: Routes = [
    { path: '', component: MoneyListComponent },
    { path: ':id', component: MoneyDataComponent },
];