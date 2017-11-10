import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserService } from "../service/user.service";
import { UserRole } from "../model/UserRole";


export interface ComponentCanDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class AwayGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | Observable<boolean> | Promise<boolean> {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}