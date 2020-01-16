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
  videos: any
  selectedVideo: File;
  vidShow: any;

  constructor(public _connect: ConnectService, public _toastr: ToastrService, public url: UrlService) { }

  ngOnInit() {
    this.vidShow = this.url.baseURL();
    this.videoLoad();
  }


  videoLoad() {
    this._connect.videoPost().subscribe(data => {
      this.videos = data;
      console.log(this.videos);

    });
  }


  uploadVideo(v) {
    this.selectedVideo = v.target.files[0];
  }


  onUpload() {
    const upVid = new FormData();
    upVid.append('video', this.selectedVideo, this.selectedVideo.name);
    this._connect.vidData(upVid).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload SuccessFull');
        this.videoLoad();
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    this._toastr.success('Videos Uploaded');
  }


  // selectVideo: File;
  // videoShow: any;
  // isShow = false;
  // videos: any;
  // videoTask: any
  // constructor(public _conn: ConnectService, public _toastr: ToastrService, public url: UrlService) { }

  // ngOnInit() {
  //   this.videoShow = this.url.baseURL();
  // }
  // videoLoad() {
  //   this._conn.videoPost().subscribe(data => {
  //     this.videoTask = data;
  //     console.log(this.videoTask);
  //     this.videos = this.videoShow + this.videoTask
  //     console.log(this.videos);
  //   })
  // }
  // uploadVideo(v) {
  //   this.selectVideo = v.target.files[0];
  //   console.log(this.selectVideo);
  // }
  // onUpload() {
  //   const upVid = new FormData();
  //   upVid.append('video', this.selectVideo, this.selectVideo.name);
  //   this._conn.vidData(upVid).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //       console.log('Upload SuccessFull');
  //       this.videoLoad();
  //     } else if (event.type === HttpEventType.Response) {
  //       console.log(event);
  //     }
  //   });
  //   this._toastr.success('Video Uploaded');
  // }
}
