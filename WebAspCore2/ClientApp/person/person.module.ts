import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PersonRouting } from "./person.routing";
import { AppComponent } from "./components/main_component/app.component";
import { PersonListComponent } from "./components/list/personList.component";
import { PersonItemComponent } from "./components/item/personItem.component";
import { PersonService } from "./service/person.service";


@NgModule({
    declarations: [
        AppComponent, PersonListComponent, PersonItemComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        PersonRouting
    ],
    exports: [RouterModule],
    providers: [PersonService]
})
export class PersonModule {

}