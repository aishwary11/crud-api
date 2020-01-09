import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ConnectService } from "src/app/connect.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  userForm: FormGroup;
  constructor(public connectService: ConnectService, public router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required)
    });
  }

  logName(event) {
    console.log(event.target.value);
  }
  logEmail(event) {
    console.log(event.target.value);
  }
  logPhone(event) {
    console.log(event.target.value);
  }

  saveData() {
    let dtData = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone
    };
    this.connectService.getData(dtData).subscribe(data => {
      console.log("data: ", data);
      this.toastr.success(dtData.name + " " + dtData.email + " " + dtData.phone);
    });
    this.router.navigate(["/dashboard/list"]);
  }
  onCancel() {
    this.router.navigate(["/dashboard/list"]);
    this.toastr.error('chal nikal yaha se');
  }
}
