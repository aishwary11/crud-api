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
  httpLogin;
  httpImg: any;
  httpVideoDisp: { headers: { "Content-Type": string; }; };
  httpImgDisp: { headers: { "Content-Type": string; }; };

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
    this.deleteUrl = this.baseUrl + "user/delete";
    this.httpDelete = {
      headers: {
        "Content-yype": "application/json"
      }
    };
    return this.http.post(this.deleteUrl, id, this.httpDelete);
  }


  editData(m) {
    let editUrl = this.baseUrl + "user/edit";
    this.httpEdit = {
      headers: {
        "Content-yype": "application/json"
      }
    };
    return this.http.post(editUrl, m, this.httpEdit);
  }


  uploadData(up) {
    let uploadData = this.baseUrl + "user/upload";
    this.httpUpload = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(uploadData, up, this.httpUpload);
  }


  imgData(img) {
    let imageUrl = this.baseUrl + "user/images";
    return this.http.post(imageUrl, img, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }


  imgPost() {
    var imgDisplayUrl = this.baseUrl + "user/imgDisp";
    this.httpImgDisp = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.get(imgDisplayUrl, this.httpImgDisp);
  }


  vidData(vid) {
    let videoUrl = this.baseUrl + "user/video";
    return this.http.post(videoUrl, vid, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }

  videoPost() {
    var videoDisplayUrl = this.baseUrl + "user/videoDisp";
    this.httpVideoDisp = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.get(videoDisplayUrl, this.httpVideoDisp);
  }

  loginData(log) {
    var loginUrl = this.baseUrl + "login/";
    this.httpLogin = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post(loginUrl, this.httpLogin, log)
  }
}
