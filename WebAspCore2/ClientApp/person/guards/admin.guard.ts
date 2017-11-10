import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserService } from "../service/user.service";
import { UserRole } from "../model/UserRole";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.userService.getUserRoles() == UserRole.ADMIN) {
           
            return true;
        } else {
            this.router.navigate(['/persons']);
        }
        return false;
    }

}