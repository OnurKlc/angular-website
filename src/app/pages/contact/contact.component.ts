import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['blog']);
    }
  }

  constructor(private router: Router, private http: HttpClient) {
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


  ngOnInit(): void {
    this.http.get<any>('https://api.github.com/users/OnurKlc').subscribe(data => {
      console.log(data);
      this.followerCount = data.followers;
      this.followingCount = data.following;
      this.location = data.location;
      this.company = data.company
    });
  }

}
