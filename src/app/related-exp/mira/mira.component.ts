import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-related-exp-mira',
    templateUrl: 'mira.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class MiraPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}