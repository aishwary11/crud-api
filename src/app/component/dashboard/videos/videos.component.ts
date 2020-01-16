import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';
import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  selectVideo: File;
  videoShow: any;
  isShow = false;
  video: any;
  videoTask: any
  constructor(public _conn: ConnectService, public _toastr: ToastrService, public url: UrlService) { }

  ngOnInit() {
    this.videoShow = this.url.baseURL();
    this.videoLoad();
  }
  videoLoad() {
    this._conn.videoPost().subscribe(data => {
      this.video = data[0];
      this.isShow = true;
      console.log(this.video.originalname);
      this.videoTask = this.videoShow + this.video.originalname
      console.log(this.videoTask);
    })
  }
  uploadVideo(v) {
    this.selectVideo = v.target.files[0];
    console.log(this.selectVideo);
  }
  onUpload() {
    const upVid = new FormData();
    upVid.append('video', this.selectVideo, this.selectVideo.name);
    this._conn.vidData(upVid).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload SuccessFull');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    this._toastr.success('Video Uploaded');
    this.videoLoad();
  }
}
