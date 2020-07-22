import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  @Input() pdfSrc = '../../../assets/onur_kilic_cv.pdf';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['about']);
    } else if (event.code === 'ArrowDown') {
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
