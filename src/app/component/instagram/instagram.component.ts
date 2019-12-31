import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  constructor() {
  // constructor(public insta: Instafeed) {
    // var feed = new insta({
    //   get: 'user',
    //   userId: '13775857179',
    //   resolution: 'standard_resolution',
    //   accessToken: '13775857179.1677ed0.08af12ebd0764ef5a7706bc3831fb7e3',
    //   sortBy: 'most-recent',
    //   template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    //   limit: 15,
    // });
    // feed.run();
  }

  ngOnInit() {

  }
}
