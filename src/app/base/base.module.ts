import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchBarModule } from './searchbar/searchbar.module';
import { SocialsModule } from './socials/socials.module';
import { LogoModule } from './logo/logo.module';
import { MenuModule } from './menu/menu.module';
import { IconsModule } from '../base/icons/icons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    LogoModule,
    MenuModule,
    SearchBarModule,
    SocialsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    IconsModule,
    LoadingComponent,
    LogoModule,
    MenuModule,
    SearchBarModule,
    SocialsModule
  ]
})
export class BaseModule { }
