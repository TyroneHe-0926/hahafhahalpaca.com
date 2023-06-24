import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-related-exp-miravideo',
    templateUrl: 'miravideo.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class MiraVideoPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}