import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Money } from '../model/money';

@Injectable()
export class MoneyService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private moneysUrl = 'api/data';

    constructor(private http: Http) { }

    getMoneys(): Promise<Money[]> {
        return this.http.get(this.moneysUrl)
            .toPromise()
            .then(response => response.json() as Money[])
            .catch(this.handleError);
    }


    getMoney(id: number): Promise<Money> {
        const url = `${this.moneysUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Money)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.moneysUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Money> {
        return this.http
            .post(this.moneysUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Money)
            .catch(this.handleError);
    }

    update(money: Money): Promise<Money> {
        const url = `${this.moneysUrl}/${money.moneyID}`;
        return this.http
            .put(url, JSON.stringify(money), { headers: this.headers })
            .toPromise()
            .then(() => money)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}