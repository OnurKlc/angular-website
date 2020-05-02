import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private debounceOnScroll = _.debounce((event) => this.handleEvent(event), 200,
    {
      leading: true,
      trailing: false
    });

  portfolioItems = [
    {
      title: 'Trivia Quiz -',
      explanation: 'This is a basic quiz game created with React. I used functional structure in all ' +
        'components. State management is handled with Context API. There will be some more improvements ' +
        'via implementing a UI library.',
      link: 'https://elated-nobel-868cb5.netlify.com/'
    },
    {
      title: 'Lorem Ipsum -',
      explanation: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
        ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' +
        ' in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://google.com/'
    }
  ];

  count = 0;

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.debounceOnScroll(event);
  }

  constructor(private router: Router) {
  }

  handleEvent(event: WheelEvent) {
    if (this.count > 0) {
      if (event.deltaY < 0) {
        this.router.navigate(['about']);
      } else {
        this.router.navigate(['resume']);
      }
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.count++, 600);
  }

}
