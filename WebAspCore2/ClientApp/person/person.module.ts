﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonRouting } from "./person.routing";
import { AppComponent } from "./components/main_component/app.component";
import { PersonListComponent } from "./components/list/personList.component";
import { PersonItemComponent } from "./components/item/personItem.component";
import { PersonService } from "./service/person.service";
import { CustomerDirective } from "./directives/custom.diretive";
import { StructuralComponent } from "./structural-directives/structural.component";
import { CustomerStrucureDirective } from "./directives/customStrucure.diretive";
import { PersonOneComponent } from "./components/one/personOne.component";
import { DdaComponent } from "./components/second/dda.component";
import { AuthService } from "./service/auth.service";
import { UserService } from "./service/user.service";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { AwayGuard } from "./guards/away.guard";


@NgModule({
    declarations: [
        AppComponent, PersonListComponent, PersonItemComponent, CustomerDirective, StructuralComponent, CustomerStrucureDirective, PersonOneComponent, DdaComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        PersonRouting,
        ReactiveFormsModule
    ],
    exports: [RouterModule],
    providers: [PersonService, AuthService, UserService, AuthGuard, AdminGuard, AwayGuard]
})
export class PersonModule {

}