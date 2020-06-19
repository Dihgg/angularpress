import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
