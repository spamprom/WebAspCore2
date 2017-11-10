import { Injectable, EventEmitter } from "@angular/core";
import { UserService } from "./user.service";
import { UserModel } from "../model/user.model";
import { Router } from "@angular/router";
import { UserRole } from "../model/UserRole";

@Injectable()
export class AuthService {
    loginEventEmitter = new EventEmitter<boolean>();
    constructor(private userService: UserService, private router: Router) {

    }
    login(username: string, password: string) {
        this.userService.getAllUsers().forEach((user: UserModel) => {
            if (user.username === username && user.password === password) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.loginEventEmitter.emit(true);

                if (user.role === UserRole.CLIENT) {
                    //this.router.navigate(['persons','one']);
                    this.router.navigate(['persons']);
                } else {
                    //this.router.navigate(['persons','dda']);
                    this.router.navigate(['persons']);
                }
            }
        })
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.loginEventEmitter.emit(false);
        this.router.navigate(['persons']);
    }
}