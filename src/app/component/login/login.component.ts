import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectService } from "src/app/connect.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(public rout_to: Router, public connectLogin: ConnectService, public toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl("", Validators.required),
      pass: new FormControl("", Validators.required)
    })
  }

  loginName(event) {
    console.log(event);
  }
  loginPass(event) {
    console.log(event);
  }
  logToDash() {
    let logData = {
      name: this.loginForm.value.name,
      pass: this.loginForm.value.pass
    }
    // console.log(logData);
    // if (logData.name.value == logData.pass.value && logData.name.length == logData.pass.length) {
    //   this.toastr.success('Logged Successful');
    //   this.rout_to.navigate(['/dashboard']);
    // } else {
    //   this.toastr.error('Logged Unsuccessful');
    //   console.log('error');
    // }
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let logData = {
        name: this.loginForm.value.name,
        pass: this.loginForm.value.pass
      }
      this.connectLogin.loginData(logData).subscribe(data => {
        console.log(data);
        localStorage.setItem('token', logData.toString());
      });
    }
    this.rout_to.navigate(['/dashboard']);
  }
}
