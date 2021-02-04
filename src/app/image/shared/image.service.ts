import { Injectable } from '@angular/core';
@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
    return (this.visibleImages = IMAGES.slice(0));
  }
  getImage(id: number) {
    return IMAGES.slice(0).find((image) => image.id == id);
  }
}

const IMAGES = [
  {
    id: 1,
    category: 'Boats',
    caption: 'View from a boat',
    url: 'assets/img/boat_01.jpeg',
  },
  {
    id: 2,
    category: 'Boats',
    caption: 'Sailing from a coast',
    url: 'assets/img/boat_02.jpeg',
  },
  {
    id: 3,
    category: 'Camping',
    caption: 'camping trip17',
    url: 'assets/img/camping_01.jpeg',
  },
  {
    id: 4,
    category: 'Camping',
    caption: 'camping trip with my friend',
    url: 'assets/img/camping_02.jpeg',
  },
];
