import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) {
  }

  @HostListener('window:mousewheel', ['$event'])
  handleEvent(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.router.navigate(['blog']);
    }
  }

  ngOnInit(): void {
  }

}
