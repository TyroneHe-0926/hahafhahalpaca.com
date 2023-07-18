import { Component, OnInit } from "@angular/core";
import AOS from "aos";

@Component({
  selector: "app-projects-cs247",
  templateUrl: "cs247.component.html",
  styleUrls: ["../../intro/intro.component.css"],
})
export class CS247Page implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
