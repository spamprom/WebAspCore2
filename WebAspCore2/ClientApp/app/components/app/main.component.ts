import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [
        Title
    ]
})
export class MainComponent implements AfterViewInit {
    prefixTitle: string = ' - convert money';
    constructor(private router: Router, private titleService: Title) {
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this.menuActived(event.urlAfterRedirects);
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    ngAfterViewInit() {
    }

    menuActived(url: string): void {
        this.linkDashboard = false;
        this.linkMoney = false;
        if (url != null) {
            if (url.indexOf('/dashboard') != -1) {
                this.linkDashboard = true;
                this.titleService.setTitle('Dashboard' + this.prefixTitle);
            }
            if (url.indexOf('/money') != -1) {
                this.linkMoney = true;
                this.titleService.setTitle('Money' + this.prefixTitle);
            }
        }
    }

    //menu
    linkDashboard: boolean = true;
    linkMoney: boolean = false;
    //menu
}
