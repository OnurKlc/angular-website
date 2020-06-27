import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { StateService} from '../../state.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
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
  ];

  isOpen = false;

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
  }

  leftMenuItemClickHandler(item: object) {
    const cloneItem = JSON.parse(JSON.stringify(item));
    this.router.navigate([cloneItem.title.toLowerCase()]);
    this.toggleClass();
  }

  toggleClass() {
    this.isOpen = !this.isOpen;
    this.stateService.changeIsOpen(this.isOpen);
  }

  toggleClassIcon() {
    if (!this.stateService.isOpen) {
      this.isOpen = !this.isOpen;
      this.stateService.changeIsOpen(this.isOpen);
    }
  }
}
