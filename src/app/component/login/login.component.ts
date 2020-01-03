import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectService } from "src/app/connect.service";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(public rout_to: Router, public connectLogin: ConnectService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl("", Validators.required),
      pass: new FormControl("", Validators.required)
    })
  }

  loginName(event) {
    console.log(event.target.value);
  }
  loginPass(event) {
    console.log(event.target.value);
  }
  logToDash() {
    let loginData = {
      name: this.loginForm.value.name,
      pass: this.loginForm.value.pass
    }
    this.connectLogin.loginData(loginData).subscribe(data => {
      console.log(data);
    });
    this.rout_to.navigate(['/dashboard']);
  }
}
