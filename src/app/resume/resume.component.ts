import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {

  @HostListener('window:mousewheel', ['$event'])
  handleEvent(event: WheelEvent) {
    console.log(event);
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
