import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Login } from '../model/login';

@Injectable()
export class AuthService {
    authStatus: boolean;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dataUrl = 'api/data';

    constructor(private http: Http) { }

    public login(login: Login): Promise<boolean> {
        const url = `${this.dataUrl}/Login`;
        return this.http
            .post(url, JSON.stringify(login), { headers: this.headers })
            .toPromise()
            .then(res => {
                let result = res.json().succeeded as boolean;
                this.authStatus = result;
                return result;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    public getStatus(): boolean {
       return this.authStatus;
    }
    public logout(): void {
        this.authStatus = false;
    }
}