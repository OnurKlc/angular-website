import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('mousewheel', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousewheel', this.scroll, true);
  }

  scroll = (event): void => {
    if (event.deltaY < 0) {
      this.router.navigate(['about']);
    } else {
      this.router.navigate(['resume']);
    }
  }
}
