import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs';
import {animate, group, query, animateChild, style, transition, trigger} from '@angular/animations';
import { debounce } from 'lodash-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // trigger('animRoutes', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({})
    //       , {optional: true}),
    //     group([
    //       query(':enter', [
    //         style({transform: 'scale(0)'}),
    //         animate('0.25s', style({transform: 'scale(1)'}))
    //       ], {optional: true}),
    //       query(':leave', [
    //         style({transform: 'scale(1)'}),
    //         animate('0.25s', style({transform: 'scale(0)'}))
    //       ], {optional: true}),
    //     ])
    //   ]),
    // ])
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
