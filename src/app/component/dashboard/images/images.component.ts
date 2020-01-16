import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';
import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: any
  selectedImg: File;
  imgShow: any;

  constructor(public _connect: ConnectService, public _toastr: ToastrService, public _url: UrlService) { }

  ngOnInit() {
    this.imgShow = this._url.baseURL();
    this.imgLoad();
  }


  imgLoad() {
    this._connect.imgPost().subscribe(data => {
      this.images = data;
      console.log(this.images);
    });
  }


  uploadImg(e) {
    this.selectedImg = e.target.files[0];
  }


  onUpload() {
    const upImg = new FormData();
    upImg.append('photo', this.selectedImg, this.selectedImg.name);
    this._connect.imgData(upImg).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload SuccessFull');
        this.imgLoad();
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    this._toastr.success('Images Uploaded');
  }
}
