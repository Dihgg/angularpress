import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { YoutubeModule } from './youtube/youtube.module';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { GalleryModule } from './gallery/gallery.module';



@NgModule({
  declarations: [
    TruncatePipe,
    BlocksComponent,
    LatestPostsComponent,
    PostComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    YoutubeModule,
    GalleryModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
