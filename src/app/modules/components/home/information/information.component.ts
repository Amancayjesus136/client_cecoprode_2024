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
    'assets/img/banner1.jpeg',
    'assets/img/banner2.jpeg'
  ];
  intervalId: any;
  jsConfetti: JSConfetti;
  confettiLaunches: number = 0; // Contador de lanzamientos de confeti
  maxConfettiLaunches: number = 3; // Máximo de veces que se lanzará el confeti

  constructor() {
    this.jsConfetti = new JSConfetti(); // Inicializar JSConfetti
  }

  ngOnInit(): void {
    this.showModal();
    this.startImageRotation();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  // Mostrar modal y lanzar confeti
  showModal(): void {
    this.isModalVisible = true;
    this.launchConfetti(); // Lanzar confeti cuando se muestra el modal
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  startImageRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  // Función para lanzar confeti varias veces (2 o 3 veces)
  launchConfetti(): void {
    const confettiInterval = setInterval(() => {
      if (this.confettiLaunches < this.maxConfettiLaunches) {
        this.jsConfetti.addConfetti();
        this.confettiLaunches++; // Incrementar contador después de cada lanzamiento
      } else {
        clearInterval(confettiInterval); // Detener el lanzamiento después de 3 veces
      }
    }, 1000); // Retraso de 1 segundo entre lanzamientos de confeti
  }
}
