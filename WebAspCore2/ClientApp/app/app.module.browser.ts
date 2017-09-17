import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { HttpModule } from '@angular/http';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        AppModuleShared
    ],
    declarations: [],
    exports: [],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }//MoneyService//
   ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
