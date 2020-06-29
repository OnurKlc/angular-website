import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['home']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['portfolio']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
