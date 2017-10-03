import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss'],
})
export class MainComponent implements AfterViewInit {

    constructor(private router: Router) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.linkDashboard = false;
                this.linkMoney = false;
                switch (event.urlAfterRedirects) {
                    case '/dashboard':
                        this.linkDashboard = true;
                        break;
                    case '/money':
                        this.linkMoney = true;
                        break;
                    default:
                }
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    ngAfterViewInit() {
       this.getdfdf();
    }

    getdfdf(): void {
        
    }

    //menu
    linkDashboard: boolean = true;
    linkMoney: boolean = false;
    //menu
}
