import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css']
})
export class IntroPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}