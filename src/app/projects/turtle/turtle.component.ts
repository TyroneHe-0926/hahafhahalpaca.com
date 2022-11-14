import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-projects-turtle',
    templateUrl: 'turtle.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class TurtlePage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}