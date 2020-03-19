import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private debounceOnScroll = _.debounce((event) => this.handleEvent(event), 200,
    {
      leading: true,
      trailing: false
    });

  count = 0;

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.debounceOnScroll(event);
  }

  handleEvent(event: WheelEvent) {
    if (event.deltaY > 10 && this.count > 0) {
      this.router.navigate(['about']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => this.count++, 1000);
  }
}
