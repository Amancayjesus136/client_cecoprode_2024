import { Component, OnInit, OnDestroy } from '@angular/core';
import JSConfetti from 'js-confetti';

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
  ];
  intervalId: any;
  jsConfetti: JSConfetti;
  confettiLaunches: number = 0;
  maxConfettiLaunches: number = 3;

  constructor() {
    this.jsConfetti = new JSConfetti();
  }

  ngOnInit(): void {
    this.showModal();
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showModal(): void {
    this.isModalVisible = true;
    this.launchConfetti();
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  launchConfetti(): void {
    const confettiInterval = setInterval(() => {
      if (this.confettiLaunches < this.maxConfettiLaunches) {
        this.jsConfetti.addConfetti();
        this.confettiLaunches++;
      } else {
        clearInterval(confettiInterval);
      }
    }, 1000);
  }
}
