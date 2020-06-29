import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['resume']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['contact']);
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
