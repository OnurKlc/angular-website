import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) {
  }

  @HostListener('window:mousewheel', ['$event'])
  handleEvent(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.router.navigate(['resume']);
    } else {
      this.router.navigate(['contact']);
    }
  }

  ngOnInit(): void {
  }
}
