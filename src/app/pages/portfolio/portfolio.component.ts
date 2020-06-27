import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
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

  constructor(private router: Router) {
  }

  handleEvent(event: WheelEvent) {
    if (this.count > 0) {
      if (event.deltaY < 0) {
        this.router.navigate(['about']);
      } else {
        this.router.navigate(['resume']);
      }
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.count++, 600);
  }

}
