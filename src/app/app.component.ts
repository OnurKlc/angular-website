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
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(9rem) rotate(-10deg)'
              }),
              animate(
                '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                style({opacity: 1, transform: 'translateY(0) rotate(0)'})
              ),
              animateChild()
            ],
            {optional: true}
          ),
          query(
            ':leave',
            [animate('0.35s', style({opacity: 0})), animateChild()],
            {optional: true}
          )
        ])
      ])
    ]),
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
