import {Component, OnInit} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public lottieConfig: object;

  constructor() {
    this.lottieConfig = {
            path: 'assets/8306-programming-animation.json',
            autoplay: true,
            loop: false
    };
  }

    handleAnimation(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

  ngOnInit(): void {
  }

}
