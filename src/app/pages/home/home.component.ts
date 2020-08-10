import {Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StateService} from '../../state.service';
import {ResponsiveService} from '../../responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isMobile: boolean;
  public isOpen = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowDown') {
      this.router.navigate(['about']);
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
