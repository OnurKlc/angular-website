import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs';
import {RouterOutlet} from '@angular/router';
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

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.subscription = this.stateService.isOpen
      .subscribe(val => this.isOpen = val);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPage(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
