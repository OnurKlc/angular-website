import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('mousewheel', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousewheel', this.scroll, true);
  }

  scroll = (event): void => {
    if (event.deltaY < 0) {
      this.router.navigate(['resume']);
    } else {
      this.router.navigate(['contact']);
    }
  }
}
