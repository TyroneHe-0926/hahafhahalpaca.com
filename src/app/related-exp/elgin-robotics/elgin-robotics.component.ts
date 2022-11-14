import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-related-exp-elgin-robotics',
    templateUrl: 'elgin-robotics.component.html',
    styleUrls: ['../../intro/intro.component.css']
})
export class ElginRoboticsPage implements OnInit {
    constructor() { }

    ngOnInit() {
        AOS.init();
    }
}