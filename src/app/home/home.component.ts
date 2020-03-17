import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    window.addEventListener('mousewheel', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousewheel', this.scroll, true);
  }

  scroll = (event): void => {
    if (event.deltaY > 0) {
      this.router.navigate(['about']);
    }
  }
}
