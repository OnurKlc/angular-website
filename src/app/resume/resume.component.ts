import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from "lodash-es";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
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
    if (event.deltaY < 0) {
      this.router.navigate(['portfolio']);
    } else {
      this.router.navigate(['blog']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
