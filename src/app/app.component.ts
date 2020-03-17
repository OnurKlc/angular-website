import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs';
import {animate, group, query, animateChild, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'})
          , {optional: true}),
        group([
          query(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
          ], {optional: true}),
          query(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
          ], {optional: true}),
        ])
      ]),
    ])
  ]
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

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }
}
