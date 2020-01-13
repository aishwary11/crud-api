import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  selectVideo: File;
  constructor(public _conn: ConnectService, public _toastr: ToastrService) { }

  ngOnInit() {
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
        console.log('Upload SuccessFul');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
    this._toastr.success('Video Uploaded');
  }
}
