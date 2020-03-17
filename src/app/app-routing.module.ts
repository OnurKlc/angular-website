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
    component: HomeComponent,
    data: {
      page: 'home',
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      page: 'about',
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      page: 'portfolio',
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      page: 'resume',
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      page: 'blog',
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      page: 'contact',
    }
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
