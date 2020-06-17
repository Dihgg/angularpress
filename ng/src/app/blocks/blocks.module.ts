import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { YoutubeModule } from './youtube/youtube.module';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [BlocksComponent, LatestPostsComponent, PostComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    YoutubeModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
