import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: "root"
})
export class ConnectService {
  httpAdd: any;
  httpclient: any;
  baseUrl: any;
  httpDisp: any;
  deleteUrl: string;
  httpUpload: any;
  httpDelete: {};
  httpEdit: {};
  logID: any;
  constructor(public http: HttpClient, public url: UrlService) {
    this.baseUrl = this.url.baseURL();
    console.log(this.baseUrl);
  }

  getData(data) {
    var url = this.baseUrl + "user/add";
    this.httpAdd = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(url, data, this.httpAdd);
  }

  postData() {
    var displayUrl = this.baseUrl + "user/disp";
    this.httpDisp = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.get(displayUrl, this.httpDisp);
  }

  deleteData(id) {
    console.log(id);
    this.deleteUrl = this.baseUrl + "user/delete";
    this.httpDelete = {
      headers: {
        "Content-yype": "application/json"
      }
    };
    return this.http.post(this.deleteUrl, id, this.httpDelete);
  }

  editData(m) {
    console.log(m);
    let editUrl = this.baseUrl + "user/edit";
    this.httpEdit = {
      headers: {
        "Content-yype": "application/json"
      }
    };
    return this.http.post(editUrl, m, this.httpEdit);
  }
  uploadData(up) {
    console.log(up);
    let uploadData = this.baseUrl + "user/upload"
    this.httpUpload = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(uploadData, up, this.httpUpload);
  }
}
