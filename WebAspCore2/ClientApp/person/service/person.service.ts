import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class PersonService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private moneysUrl = 'api/data';

    constructor(private http: Http) { }
    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}