import { Component } from '@angular/core';
import { ImageServices } from '../../services/image.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  template: `
    <div class="content-wrapper">
      <div
        class="img-container"
        (mouseenter)="mouseEnter()"
        (mouseleave)="mouseLeave()"
      >
        <img [src]="imageServices.active_img()" alt="imge" />
        <!-- <img [src]="imgPath" alt="imge" /> -->
      </div>
    </div>
  `,
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  //   imgPath: String = '';

  constructor(public imageServices: ImageServices) {
    imageServices.getRandomImage();
  }
  mouseEnter() {
    this.imageServices.cicle();
  }

  mouseLeave() {
    console.log('mouse leave :');
  }
}
