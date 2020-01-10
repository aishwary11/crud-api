import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectService } from "src/app/connect.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as XLSX from 'xlsx';


@Component({
  selector: "list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  userData: any;
  storeData: any;
  jsonData: any;
  textData: any;
  fileUploaded: File;
  worksheet: any;
  select = ['Add User', 'Remove User'];
  isDisabled = false;
  constructor(public routee: Router, public connect: ConnectService, public spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.isDisabled = "Select Value";
    this.spinner.show();
    setTimeout(() => {
    }, 500);
    this.load();
  }

  load() {
    this.connect.postData().subscribe(data => {
      this.userData = data;
      this.spinner.hide();
    });
  }
  addEmp() {
    this.routee.navigate(["/dashboard/add"]);
  }

  deleteData(m) {
    console.log(m._id);
    var data = {
      id: m._id
    };
    this.connect.deleteData(data).subscribe(data => {
      console.log(data);
      this.load();
    });
  }

  editData(m) {
    var data = {
      id: m._id,
      Params: {
        name: m.name,
        email: m.email,
        phone: m.phone
      }
    };
    this.routee.navigate(["/dashboard/edit"], {
      queryParams: { result: JSON.stringify(data) }
    });
  }
  uploadedFile(event) {
    this.fileUploaded = event.target.files[0];
    this.readExcel();
  }
  readExcel() {
    let readFile = new FileReader();
    readFile.onload = (e) => {
      this.storeData = readFile.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      console.log(this.worksheet);
    }
    readFile.readAsArrayBuffer(this.fileUploaded);
  }
  upload() {
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
    console.log(this.jsonData);
    this.connect.uploadData(this.jsonData).subscribe(data => {
    });
    this.load()
  }
  uploadImg(e) {
    console.log(e,'aish');
  }
}