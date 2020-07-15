import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { ArchiveComponent } from './archive/archive.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './base/header/header.component';
import { BlocksModule } from './blocks/blocks.module';
import { FooterComponent } from './base/footer/footer.component';
import { MenuComponent } from './base/menu/menu.component';
import { SocialsComponent } from './base/socials/socials.component';
import { IconsModule } from './icons/icons.module';
import { MenuLinkComponent } from './base/menu/menu-link/menu-link.component';
import { MenuModule } from './base/menu/menu.module';
import { SocialsModule } from './base/socials/socials.module';
import { LogoModule } from './base/logo/logo.module';
import { SearchModule } from './base/search/search.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PageComponent,
    ArchiveComponent,
    CategoryComponent,
    TagComponent,
    AuthorComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BlocksModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule,
    MenuModule,
    SocialsModule,
    LogoModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
