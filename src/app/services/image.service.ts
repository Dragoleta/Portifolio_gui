import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageServices {
  main_images: String[] = [
    '/Concepts_Lineart_Demonio_da_ordem_21_11_2024.png',
    '/Concepts_2.1_Demonio_da_ordem_20_11_2024.png',
    '/Concepts_1_Demonio_da_ordem_20_11_2024.png',
    '/Concepts_2.2_Demonio_da_ordem_20_11_2024.png',
    '/Meu_filho_3.png',
  ];

  img_number: number = 0;
  active_img = signal(this.main_images[this.img_number]);

  constructor() {}

  getRandomImage() {
    this.img_number = Math.floor(Math.random() * this.main_images.length);
    this.active_img.set(this.main_images[this.img_number]);
  }

  cicle() {
    if (this.main_images.length <= this.img_number + 1) {
      this.img_number = 0;
    } else {
      this.img_number += 1;
    }
    this.active_img.set(this.main_images[this.img_number]);
  }
  cicleBack() {}
}
