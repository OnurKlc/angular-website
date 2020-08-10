import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../responsive.service';
import {StateService} from '../../state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isMobile: boolean;
  public isOpen: boolean;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['home']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['resume']);
    }
  }

  constructor(private router: Router,
              private responsiveService: ResponsiveService,
              private stateService: StateService) {
  }

  ngOnInit(): void {
    this.onResize();
    this.responsiveService.checkWidth();
    this.stateService.isOpen.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
