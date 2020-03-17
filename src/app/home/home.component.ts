import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private debounceOnScroll = _.debounce((event) => this.handleEvent(event), 50,
    {
      leading: false,
      trailing: true
    })

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.debounceOnScroll(event);
  }

  handleEvent(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.router.navigate(['about']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
