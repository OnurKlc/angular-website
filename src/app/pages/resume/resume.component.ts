import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../responsive.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  showResume?: boolean;
  public isMobile: boolean;
  @Input() pdfSrc = '../../../assets/onur_kilic_cv.pdf';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['about']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['blog']);
    } else if (event.code === 'Escape') {
      this.showResume = false;
    }
  }

  toggleResumeVisibility = () => {
    this.showResume = !this.showResume;
  }

  constructor(private router: Router, private responsiveService: ResponsiveService) {
  }

  ngOnInit(): void {
    this.showResume = false;
    this.onResize();
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
