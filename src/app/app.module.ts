import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {NgxTypedJsModule} from 'ngx-typed-js';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzCardModule} from 'ng-zorro-antd';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { LinkedinFill, GithubOutline, UpSquareOutline, DownSquareOutline } from '@ant-design/icons-angular/icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BlogComponent} from './pages/blog/blog.component';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {ResumeComponent} from './pages/resume/resume.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {ResponsiveService} from './responsive.service';

const icons: IconDefinition[] = [ LinkedinFill, GithubOutline, UpSquareOutline, DownSquareOutline ];


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
    NzCardModule,
    NgxExtendedPdfViewerModule,
    NgxTypedJsModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
