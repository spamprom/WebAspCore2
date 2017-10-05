import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    providers: []
})
export class DashboardComponent implements AfterViewInit {
    labelShow: string;
    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe((param: any) => {
            this.labelShow = param['isSuccess'];
        });
    }

    ngAfterViewInit() {
        
    }
}



