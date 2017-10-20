import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule} from '@angular/platform-browser';


import { AppComponent } from "./main_component/app.component";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app.routing";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,

        CoreModule,
        AppRoutingModule,
    ],
    exports: [AppRoutingModule],
    providers: []
})
export class AppModuleMain {
}