import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ProfileComponent } from './profile/profile.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {AppRoutingModule} from './app-routing.module';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { BlogComponent } from './blog/blog.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ProfileComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true
    }),
    AppRoutingModule
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
