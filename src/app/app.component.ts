import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs';
import {RouterOutlet} from '@angular/router';
import {ResponsiveService} from './responsive.service';
import {fadeAnimation} from './animations/fade.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  isOpen: boolean;
  subscription: Subscription;
  isMobile: boolean;

  constructor(private stateService: StateService, private responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.subscription = this.stateService.isOpen
      .subscribe(val => this.isOpen = val);

    this.responsiveService.getMobileStatus().subscribe( isMobile => {
        this.isMobile = isMobile
    });
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPage(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
