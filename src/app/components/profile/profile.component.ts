import {Component, Input} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() isMobile: boolean;
  public lottieConfig: object;

  constructor() {
    this.lottieConfig = {
            path: 'assets/8306-programming-animation.json',
            autoplay: true,
            loop: false
    };
  }
}
