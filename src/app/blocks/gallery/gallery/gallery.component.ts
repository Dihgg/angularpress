import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Image } from 'src/app/services/wordpress.interface';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public ids: number[] = [];
  public columns: number;
  public images: Image[] = [];
  public css: string[] = [];

  public config: NguCarouselConfig;

  @Input()
  set attrs(attrs: string[]) {
    this.ids = attrs['ids'];

    this.columns = attrs['columns'];

    this.css = [
      `gallery--columns-${attrs['columns']}`,
      `gallery--align-${attrs['align'] || 'left'}`,
      attrs['className'] || undefined
    ];

    this.config = {
      grid: { xs: 1, sm: 1, md: this.columns, lg: this.columns, all: 0 },
      slide: 3,
      speed: 250,
      point: {
        visible: true
      },
      load: 2,
      velocity: 0,
      touch: true,
      easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };
  }

  constructor(
    public wordpress: WordpressService
  ) { }

  ngOnInit(): void {
    this.ids.forEach((id: number) => this.wordpress.getMedia(id).subscribe(
      media => this.images.push(media.sizes['full'])
    ));
  }

}
