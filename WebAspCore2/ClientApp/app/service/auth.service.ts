import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from "@angular/router";

import 'rxjs/add/operator/toPromise';

import { Login } from '../model/login';

@Injectable()
export class AuthService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dataUrl = 'api/data';

    constructor(private http: Http, private router: Router) { }

    public login(login: Login): Promise<boolean> {
        const url = `${this.dataUrl}/Login`;
        return this.http
            .post(url, JSON.stringify(login), { headers: this.headers })
            .toPromise()
            .then(res => {
                let result = res.json().succeeded as boolean;
                return result;
            })
            .catch(this.handleError);
    }

    public logout(): void {
        const url = `${this.dataUrl}/Logout`;
        this.http.get(url);

        //this.router.navigate(['/User', 'Login']);
        this.router.navigateByUrl('/User/Login');
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}