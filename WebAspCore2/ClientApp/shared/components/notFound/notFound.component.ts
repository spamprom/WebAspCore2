import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'notFound',
    templateUrl: 'notFound.component.html',
    styleUrls: [ 'notFound.component.scss']
})
export class NotFoundComponent {

    urlFrom: string = "";
    constructor(private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.urlFrom = event.url;
            }
        });
    }
}
