import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {AppRoutingModule} from './app-routing.module';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { BlogComponent } from './pages/blog/blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ProfileComponent,
    BlogComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NzTimelineModule,
    NgxExtendedPdfViewerModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
