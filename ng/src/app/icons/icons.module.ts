import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Menu,
  Facebook,
  Twitter,
  Search,
  ExternalLink
} from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Menu,
      Facebook,
      Twitter,
      Search,
      ExternalLink
    })
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
