import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cta-contact",
  templateUrl: "./cta-contact.component.html",
  styleUrls: ["./cta-contact.component.css"]
})
export class CtaContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("opening in maps..");
    window.open(
      "http://maps.google.com/maps?saddr=My+Location&daddr=19.0513933,73.0728258",
      "_blank"
    );
  }
}
