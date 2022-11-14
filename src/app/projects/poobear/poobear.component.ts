import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-projects-poobear',
    templateUrl: 'poobear.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class PoobearPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}