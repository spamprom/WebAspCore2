import { Optional, SkipSelf, NgModule } from "@angular/core";
import { DashboardComponent } from "../shared/components/dashboard/dashboard.component";
import { NotFoundComponent } from "../shared/components/notFound/notFound.component";
import { PersonModule } from "../person/person.module";
import { AppComponent } from "./main_component/app.component";


@NgModule({
    imports: [PersonModule],
    declarations: [DashboardComponent, NotFoundComponent, AppComponent]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is alredy loaded. Import it in the AppModule only');
        }
    }
}