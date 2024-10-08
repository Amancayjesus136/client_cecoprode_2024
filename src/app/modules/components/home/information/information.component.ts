import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  isModalVisible: boolean = false;
  currentIndex: number = 0;
  images: string[] = [
    'assets/img/banner3.png',
    'assets/img/banner1.jpeg',
    'assets/img/banner2.jpeg'
  ];
  intervalId: any;

  ngOnInit(): void {
    this.isModalVisible = true;
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
}
