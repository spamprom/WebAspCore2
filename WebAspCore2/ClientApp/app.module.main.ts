import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';


import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { NotFoundComponent } from "./shared/components/notFound/notFound.component";
import { AppComponent } from "./main_component/app.component";
import { UserModule } from "./money/money.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent, DashboardComponent, NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
        UserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
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