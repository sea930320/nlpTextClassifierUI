import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss']
})

export class ContentLayoutComponent {

    constructor(private router: Router) {
        router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url.includes('/login') || event.url === '/signup') {
                }
                else {
                }
            }
        });
    }

    getPage(outlet) {
        return outlet.activatedRouteData['title'] || '';
    }
}