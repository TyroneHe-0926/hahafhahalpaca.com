import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-projects-ramone',
    templateUrl: 'ramone.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class RamonePage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}