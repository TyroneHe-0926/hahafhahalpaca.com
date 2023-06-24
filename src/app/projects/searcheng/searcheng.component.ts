import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-projects-searcheng',
    templateUrl: 'searcheng.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class SearchEngPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}