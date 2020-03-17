import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('mousewheel', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousewheel', this.scroll, true);
  }

  scroll = (event): void => {
    if (event.deltaY < 0) {
      this.router.navigate(['blog']);
    }
  }
}
