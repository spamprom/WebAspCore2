import { Injectable } from "@angular/core";
import { UserModel } from "../model/user.model";
import { UserRole } from "../model/UserRole";

@Injectable()
export class UserService
{
    private usersCollection: UserModel[] = [];
    private user: any;
    currentUser: UserModel;
    constructor()
    {
        this.usersCollection.push(new UserModel('client', '123', UserRole.CLIENT));
        this.usersCollection.push(new UserModel('admin', '123', UserRole.ADMIN));
    }

    getUser()
    {
        this.user = localStorage.getItem('currentUser');
        if (!this.user)
        {
            return null;
        }
        this.currentUser = JSON.parse(this.user);
        return this.currentUser;
    }

    getAllUsers()
    {
        return this.usersCollection;
    }

    getUserRoles(): UserRole {
        if (this.getUser() == null)
            return UserRole.Emty;
        if (this.currentUser != null)
        {
            return this.currentUser.role;
        } else {
            return UserRole.Emty;
        }
    }
}