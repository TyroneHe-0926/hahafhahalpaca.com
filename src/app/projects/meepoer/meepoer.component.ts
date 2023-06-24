import { Component, OnInit } from "@angular/core";
import AOS from "aos";

@Component({
  selector: "app-projects-poobear",
  templateUrl: "meepoer.component.html",
  styleUrls: ["../../intro/intro.component.css"],
})
export class MeepoerPage implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
