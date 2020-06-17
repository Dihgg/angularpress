import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { YoutubeModule } from './youtube/youtube.module';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';



@NgModule({
  declarations: [BlocksComponent, LatestPostsComponent],
  imports: [
    CommonModule,
    YoutubeModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
