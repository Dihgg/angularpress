import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarModule } from './searchbar/searchbar.module';
import { SocialsModule } from './socials/socials.module';
import { LogoModule } from './logo/logo.module';
import { MenuModule } from './menu/menu.module';
import { IconsModule } from '../base/icons/icons.module';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from './loading/loading.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    LogoModule,
    MenuModule,
    SearchBarModule,
    SocialsModule,
    LoadingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    IconsModule,
    LogoModule,
    MenuModule,
    SearchBarModule,
    SocialsModule,
    LoadingModule
  ]
})
export class BaseModule { }
