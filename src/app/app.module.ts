import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {AppRoutingModule} from './app-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule
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
