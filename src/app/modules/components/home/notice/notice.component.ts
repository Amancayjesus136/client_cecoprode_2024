import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  standalone: true,
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent {
  mainImage: string;

  constructor() {
    this.mainImage = 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
  }

  changeImage(newImage: string) {
    this.mainImage = newImage;
  }
}
