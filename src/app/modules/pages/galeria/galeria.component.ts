import { Component } from '@angular/core';

interface Image {
  src: string;
  category: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  categories: string[] = ['Todos', '70s', '80s', '90s', '2000s'];

  images: Image[] = [
    { src: 'assets/img/galeria/img1_2024.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2016.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img2_2016.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img3_2016.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/biblioteca1.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/biblioteca2.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/centro.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/dirigente.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/elizabeth.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/historia.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_1976.jpeg', category: '70s' },
    { src: 'assets/img/galeria/img1_1979.jpeg', category: '70s' },
    { src: 'assets/img/galeria/img1_1980.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img1_1984.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img1_1986.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img1_1990.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1991.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1992.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1993.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1994.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1996_1998.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1997.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_1999.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1_2000.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2006.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2009.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2012.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2013.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2016.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img1_2024.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img2_1974.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img2_1980.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img2_1984.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img2_1991.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img2_1992.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img2_1993.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img2_1994.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img2_1997.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img2_2000.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img2_2009.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img3_1974.jpeg', category: '70s' },
    { src: 'assets/img/galeria/img3_1984.jpeg', category: '80s' },
    { src: 'assets/img/galeria/img3_1991.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img3_2016.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/img4_1990.jpeg', category: '90s' },
    { src: 'assets/img/galeria/img1974.jpeg', category: '70s' },
    { src: 'assets/img/galeria/logo_villa.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/ismem.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/programa_paradero.jpeg', category: '2000s' },
    { src: 'assets/img/galeria/revista.jpeg', category: '2000s' },
  ];

  selectedCategory: string = 'Todos';
  isModalVisible: boolean = false; // Modal visibility state
  currentImageSrc: string | null = null; // Currently selected image src

  get filteredImages(): Image[] {
    return this.selectedCategory === 'Todos'
      ? this.images
      : this.images.filter(image => image.category === this.selectedCategory);
  }

  filterImages(category: string) {
    this.selectedCategory = category;
  }

  openModal(imageSrc: string) {
    this.currentImageSrc = imageSrc; // Set the current image src
    this.isModalVisible = true; // Show the modal
  }

  closeModal() {
    this.isModalVisible = false; // Hide the modal
    this.currentImageSrc = null; // Reset the current image src
  }
}
