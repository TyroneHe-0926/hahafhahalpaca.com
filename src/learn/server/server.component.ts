import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    //or we can do by 1. attribute [app-server] or 2. by class .app-server
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    name = "";
    names = ["hfh1", "hfh2", "hfh3"]
    allowAccess = false;
    warningStatus = false;

    constructor() {
        this.name = "hahafhaha";
        setInterval(() => {
            this.warningStatus = !this.warningStatus;
        }, 2000)
    }

    getOwnerName() {
        return this.name
    }


}
