import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from "lodash-es";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private debounceOnScroll = _.debounce((event) => this.handleEvent(event), 50,
    {
      leading: false,
      trailing: true
    })

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.debounceOnScroll(event);
  }

  constructor(private router: Router) {
  }

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
