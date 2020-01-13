import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  selectedFile: File;
  constructor(public _connect: ConnectService, public _toastr: ToastrService) { }

  ngOnInit() {
  }
  uploadImg(e) {
    this.selectedFile = e.target.files[0];
  }
  onUpload() {
    const upImg = new FormData();
    upImg.append('photo', this.selectedFile, this.selectedFile.name);
    this._connect.imgData(upImg).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload SuccessFul');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    this._toastr.success('Images Uploaded');
  }
}
