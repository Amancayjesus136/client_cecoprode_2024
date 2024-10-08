import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { ModuleComponent } from './modules/admin/pages/module/module.component';
import { ProfileViewComponent } from './modules/admin/pages/profile/partials/profile-view/profile-view.component';
import { AuthGuard } from './auth.guard';
import { MisionComponent } from './modules/pages/mision/mision.component';
import { VisionComponent } from './modules/pages/vision/vision.component';
import { SomosComponent } from './modules/pages/somos/somos.component';
import { GaleriaComponent } from './modules/pages/galeria/galeria.component';
import { ProyectosComponent } from './modules/pages/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'quienes-somos', component: SomosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'auth/login/cecoprodeves', component: LoginComponent },
  { path: 'auth/register/cecoprodeves', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'module', component: ModuleComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileViewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
