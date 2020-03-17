import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {debounce} from '../../decorators/debounce.decorator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @HostListener('window:mousewheel', ['$event'])
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
