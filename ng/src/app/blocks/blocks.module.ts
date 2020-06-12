import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './blocks.component';
import { YoutubeModule } from './youtube/youtube.module';



@NgModule({
  declarations: [BlocksComponent],
  imports: [
    CommonModule,
    YoutubeModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
