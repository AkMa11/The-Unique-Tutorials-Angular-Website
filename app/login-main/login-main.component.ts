import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login-main",
  templateUrl: "./login-main.component.html",
  styleUrls: ["./login-main.component.css"]
})
export class LoginMainComponent implements OnInit {
  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {}

  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "Please enter your email"
      : this.email.hasError("email")
        ? "Not a valid email"
        : "";
  }

  pass = new FormControl("", [Validators.required]);

  openSnackBar() {
    this.snackBar.open("Email or password is wrong", "", {
      duration: 2000
    });
  }
}
