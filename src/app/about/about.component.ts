import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  @HostListener('window:mousewheel', ['$event'])
  handleEvent(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['portfolio']);
    }
  }

  ngOnInit(): void {
  }
}
