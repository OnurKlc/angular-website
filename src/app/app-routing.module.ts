import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {BlogComponent} from './blog/blog.component';

const appRoots: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoots),
    NgxTypedJsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
