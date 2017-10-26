import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { NavigatMenu } from "../shared/model/navigatMenu";
declare var $: any;

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Title
    ]
})
export class AppComponent implements AfterViewInit {
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
        this.linkPerson = false;

        this.linksFirst.activeClass = false;
        this.linksSecond.activeClass = false;

        if (url != null) {
            if (url.indexOf('/dashboard') != -1) {
                this.linkDashboard = true;
                this.titleService.setTitle('Dashboard' + this.prefixTitle);
            }
            if (url.indexOf('/moneys') != -1) {
                this.linkMoney = true;
                this.titleService.setTitle('Money' + this.prefixTitle);
            }
            if (url.indexOf('/persons') != -1) {
                this.linkPerson = true;
                this.titleService.setTitle('Person' + this.prefixTitle);
            }
            if (url.indexOf('/404') != -1) {
                this.linkDashboard = true;
                this.titleService.setTitle('404' + this.prefixTitle);
            }
        }
    }

    //menu
    linkDashboard: boolean = true;
    linkMoney: boolean = false;
    linkPerson: boolean = false;

    linksFirst: NavigatMenu = new NavigatMenu();
    linksSecond: NavigatMenu = new NavigatMenu();
    //menu


    menuOpen(link: NavigatMenu, event: any): void {
        link.openClass = !link.openClass;
        if (link.openClass) {
            $(event.toElement).parents("li:first").find("ul").slideDown();
        } else {
            $(event.toElement).parents("li:first").find("ul").slideUp();
        }
    }

}
