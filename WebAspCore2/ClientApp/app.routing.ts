import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { NotFoundComponent } from "./shared/components/notFound/notFound.component";
import { AppComponent } from "./core/main_component/app.component";

const APP_ROUTES: Routes = [
    {
        path: '', component: AppComponent, children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: '404', component: NotFoundComponent },
            { path: 'moneys', loadChildren: './money/money.module#MoneyModule' },
            //{ path: "moneys", loadChildren: "es6-promise-loader?,[name]!./money/money.module#MoneyModule" },
            { path: '**', redirectTo: '/404' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}