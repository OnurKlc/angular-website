import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData = [];

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['resume']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['contact']);
    }
  }

  constructor(private router: Router, private http: HttpClient) {
  }

  gotoBlogPost = (link) => {
    window.open(link);
  }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@joatmonnn').subscribe(data => {
      for (const item of data.items) {
        // tslint:disable-next-line:max-line-length
        item.description = item.description.substring(item.description.indexOf('</figure><p>') + 12, item.description.indexOf('</figure><p>') + 125) + '...';
        item.description = item.description.replace('<p>', '');
        item.description = item.description.replace('</p>', '');
      }
      this.blogData = data.items;
    });
  }
}
