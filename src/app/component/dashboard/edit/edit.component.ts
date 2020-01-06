import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ConnectService } from "src/app/connect.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  userData: any;
  constructor(
    public rout: Router,
    public connectService: ConnectService,
    public route: ActivatedRoute
  ) { }
  edit;
  ngOnInit() {
    this.edit = this.route.snapshot.queryParamMap.get("result");
    this.edit = JSON.parse(this.edit);
    console.log(this.edit.id);
    this.userData = new FormGroup({
      name: new FormControl(this.edit.Params.name, Validators.required),
      email: new FormControl(this.edit.Params.email, Validators.required),
      phone: new FormControl(this.edit.Params.phone, Validators.required)
    });
  }

  putName(event) {
    console.log(event.target.value);
  }
  putEmail(event) {
    console.log(event.target.value);
  }
  putPhone(event) {
    console.log(event.target.value);
  }
  editCancel() {
    this.rout.navigate(["/dashboard/list"]);
  }
  editSave() {
    let dataEdit = {
      id: this.edit.id,
      name: this.userData.value.name,
      email: this.userData.value.email,
      phone: this.userData.value.phone
    };
    console.log(dataEdit);
    console.log(this.userData.value);
    this.connectService.editData(dataEdit).subscribe(data => {
      console.log("data");
      this.rout.navigate(["/dashboard/list"]);
    });
  }
}
