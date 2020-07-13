import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Menu,
  Facebook,
  Twitter,
  Search,
  ExternalLink,
  ChevronDown
} from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Menu,
      Facebook,
      Twitter,
      Search,
      ExternalLink,
      ChevronDown
    })
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
