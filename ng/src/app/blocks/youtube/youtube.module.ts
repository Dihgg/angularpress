import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { YoutubeComponent } from './youtube/youtube.component';



@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    YoutubeComponent
  ]
})
export class YoutubeModule { }
