import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  leftMenuItems = [
    {
      title: 'Home',
      icon: ''
    },
    {
      title: 'About',
      icon: ''
    },
    {
      title: 'Portfolio',
      icon: ''
    },
    {
      title: 'Resume',
      icon: ''
    },
    {
      title: 'Blog',
      icon: ''
    },
    {
      title: 'Contact',
      icon: ''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  leftMenuItemClickHandler(item: object) {
    const cloneItem = JSON.parse(JSON.stringify(item));
    this.router.navigate([cloneItem.title.toLowerCase()]);
  }

}
