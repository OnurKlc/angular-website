import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  @HostListener('window:mousewheel', ['$event'])
  handleEvent(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.router.navigate(['about']);
    } else {
      this.router.navigate(['resume']);
    }
  }

  ngOnInit(): void {
  }

}
