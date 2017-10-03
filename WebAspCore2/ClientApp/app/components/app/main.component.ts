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
                this.linkDashboard = false;
                this.linkMoney = false;
                switch (event.urlAfterRedirects) {
                    case '/dashboard':
                        {
                            this.linkDashboard = true;
                            this.titleService.setTitle('Dashboard' + this.prefixTitle);
                        }
                        break;
                    case '/money':
                        {
                            this.linkMoney = true;
                            this.titleService.setTitle('Money' + this.prefixTitle);
                        }
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
