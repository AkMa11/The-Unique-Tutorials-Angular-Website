import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

export interface Course {
  name: string;
}

@Component({
  selector: "app-aside-form",
  templateUrl: "./aside-form.component.html",
  styleUrls: ["./aside-form.component.css"]
})
export class AsideFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  courseControl = new FormControl("", [Validators.required]);
  courses: Course[] = [
    { name: "Course 1" },
    { name: "Course 2" },
    { name: "Course 3" },
    { name: "Course 4" }
  ];

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "Please enter your email"
      : this.email.hasError("email")
        ? "Not a valid email"
        : "";
  }

  name = new FormControl("", [Validators.required]);

  number = new FormControl("", [Validators.required]);
}
