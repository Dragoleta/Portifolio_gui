import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageServices } from '../../services/image.service';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="carrousel-container">
      <ul id="carousel-list">
        <li *ngFor="let x of imgs">
          <img [src]="x" alt="" id="carousel-img" alt="Carousel IMG" />
        </li>
      </ul>
    </div>
  `,
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  imgs: String[] = [];
  constructor(public imageServices: ImageServices) {
    this.imgs = imageServices.main_images;
  }
}
