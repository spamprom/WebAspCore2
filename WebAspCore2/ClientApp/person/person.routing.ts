import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { PersonListComponent } from "./components/list/personList.component";
import { PersonItemComponent } from "./components/item/personItem.component";
import { AppComponent } from "./components/main_component/app.component";
import { PersonOneComponent } from "./components/one/personOne.component";

const PERSON_CHILD_ROUTES: Routes = [
    {
        path: 'persons', component: AppComponent, children: [
            { path: '', component: PersonListComponent },
            { path: 'one', component: PersonOneComponent },
            { path: ':id', component: PersonItemComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(PERSON_CHILD_ROUTES)],
    exports: [RouterModule]
})
export class PersonRouting {

}