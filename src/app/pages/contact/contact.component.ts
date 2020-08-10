import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ResponsiveService} from '../../responsive.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  followerCount?: string;
  followingCount?: string;
  location?: string;
  company?: string;
  starCount?: number;

  public isMobile: boolean;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['blog']);
    }
  }

  constructor(private router: Router,
              private http: HttpClient,
              private responsiveService: ResponsiveService) {
  }

  iconClick = (clickedIcon) => {
    switch (clickedIcon) {
      case 'linkedin':
        window.open('www.linkedin.com/in/OnurKlcDev');
        break;
      case 'github':
        window.open('https://github.com/OnurKlc');
        break;
    }
  }

  createLinkedinScript = () => {
    const s = document.createElement('script');
    s.src = 'https://platform.linkedin.com/badges/js/profile.js';
    s.async = true;
    s.defer = true;
    s.type = 'text/javascript';
    const elementRef = document.getElementsByTagName('head')[0];
    elementRef.appendChild(s);
  }


  ngOnInit(): void {
    this.http.get<any>('https://api.github.com/users/OnurKlc').subscribe(data => {
      this.followerCount = data.followers;
      this.followingCount = data.following;
      this.location = data.location;
      this.company = data.company;
    });

    this.http.get<any>('https://api.github.com/users/OnurKlc/starred').subscribe(data => {
      this.starCount = data.length;
    });

    this.createLinkedinScript();

    this.onResize();
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
