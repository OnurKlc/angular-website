import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ResponsiveService} from '../../responsive.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogData = [];

  public isMobile: boolean;
  showSpinner = true;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowUp') {
      this.router.navigate(['resume']);
    } else if (event.code === 'ArrowDown') {
      this.router.navigate(['contact']);
    }
  }

  constructor(private router: Router, private http: HttpClient, private responsiveService: ResponsiveService) {
  }

  gotoBlogPost = (link) => {
    window.open(link);
  }

  ngOnInit(): void {
    const randomText = Math.random().toString(16).slice(2);
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('rss_url', 'https://medium.com/feed/@joatmonnn');
    params = params.append('api_key', 's85wdgraauuqolwvo08j0uf1f9ualgos538hynja');
    params = params.append('t', randomText);
    this.http.get<any>('https://api.rss2json.com/v1/api.json', {params})
      .subscribe(data => {
      for (const item of data.items) {
        // tslint:disable-next-line:max-line-length
        item.description = item.description.substring(item.description.indexOf('</figure><p>') + 12, item.description.indexOf('</figure><p>') + 125) + '...';
        item.description = item.description.replace('<p>', '');
        item.description = item.description.replace('</p>', '');
      }
      this.blogData = data.items;
      this.showSpinner = false;
    });

    this.onResize();
    this.responsiveService.checkWidth();
  }

  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
