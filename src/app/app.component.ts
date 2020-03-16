import {Component, OnInit, OnDestroy} from '@angular/core';
import {StateService} from './state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  isOpen: boolean;
  subscription: Subscription;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.subscription = this.stateService.isOpen
      .subscribe(val => this.isOpen = val);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
