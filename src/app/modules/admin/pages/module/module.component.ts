import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService } from './module.service';
import { Module } from 'src/app/models/admin/module/module.models';
import { ApiResponse } from 'src/app/models/admin/module/response.model';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  moduleForm: FormGroup;
  showAlert: boolean = false;
  informationList: Module[] = [];
  informationListLatest: Module[] = [];

  constructor(private fb: FormBuilder, private moduleService: ModuleService) {
    this.moduleForm = this.fb.group({
      inf_title: ['', Validators.required],
      inf_description: ['', Validators.required],
      inf_image: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadLatestInformation();
    this.loadAllInformation();
  }

  loadAllInformation(): void {
    this.moduleService.getAllInformation().subscribe({
      next: (response) => {
        console.log('Response from API:', response);
        this.informationList = response.data;
      },
      error: (error) => {
        console.error('Error loading information:', error);
      }
    });
  }

  loadLatestInformation(): void {
    this.moduleService.getLatestInformation().subscribe({
      next: (response) => {
        console.log('Response from API latest:', response);
        this.informationListLatest = response.data;
      },
      error: (error) => {
        console.error('Error loading information:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.moduleForm.valid) {
      const formData = new FormData();
      formData.append('inf_title', this.moduleForm.get('inf_title')?.value);
      formData.append('inf_description', this.moduleForm.get('inf_description')?.value);

      const fileInput = document.getElementById('inf_image') as HTMLInputElement;
      if (fileInput?.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        formData.append('inf_image', file);
      } else {
        console.error('No se ha seleccionado ningún archivo.');
        return;
      }

      this.moduleService.createInformation(formData).subscribe({
        next: (response) => {
          console.log('Información creada:', response);
          this.moduleForm.reset();
          this.showAlert = true;
          setTimeout(() => this.showAlert = false, 5000);

          this.loadAllInformation();

          const modal = document.getElementById('defaultModal');
          if (modal) {
            modal.classList.add('hidden');
          }
        },
        error: (error) => {
          console.error('Error al crear la información:', error);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
