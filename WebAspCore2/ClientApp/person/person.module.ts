import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PersonRouting } from "./person.routing";
import { AppComponent } from "./components/main_component/app.component";
import { PersonListComponent } from "./components/list/personList.component";
import { PersonItemComponent } from "./components/item/personItem.component";
import { PersonService } from "./service/person.service";
import { CustomerDirective } from "./directives/custom.diretive";
import { StructuralComponent } from "./structural-directives/structural.component";
import { CustomerStrucureDirective } from "./directives/customStrucure.diretive";


@NgModule({
    declarations: [
        AppComponent, PersonListComponent, PersonItemComponent, CustomerDirective, StructuralComponent, CustomerStrucureDirective
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        PersonRouting
    ],
    exports: [RouterModule],
    providers: [PersonService]
})
export class PersonModule {

}