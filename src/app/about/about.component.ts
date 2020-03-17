import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('mousewheel', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousewheel', this.scroll, true);
  }

  scroll = (event): void => {
    if (event.deltaY < 0) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['portfolio']);
    }
  }
}
