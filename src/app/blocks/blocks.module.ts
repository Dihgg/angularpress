import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { YoutubeModule } from './youtube/youtube.module';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { GalleryModule } from './gallery/gallery.module';
import { LoadingModule } from '../base/loading/loading.module';



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
    LoadingModule,
    YoutubeModule,
    GalleryModule
  ],
  exports: [
    BlocksComponent,
    LatestPostsComponent,
    PostComponent
  ]
})
export class BlocksModule { }
