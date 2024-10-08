import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { FooterComponent } from './modules/layouts/footer/footer.component';
import { NavigationComponent } from './modules/layouts/navigation/navigation.component';
import { MenuComponent } from './modules/layouts/menu/menu.component';
import { BannerComponent } from './modules/components/home/banner/banner.component';
import { InformationComponent } from './modules/components/home/information/information.component';
import { CategoryComponent } from './modules/components/home/category/category.component';
import { NoticeComponent } from './modules/components/home/notice/notice.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { ModuleComponent } from './modules/admin/pages/module/module.component';
import { MenuSidebarComponent } from './modules/admin/layouts/menu-sidebar/menu-sidebar.component';
import { FooterSidebarComponent } from './modules/admin/layouts/footer-sidebar/footer-sidebar.component';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './modules/admin/pages/profile/partials/profile-view/profile-view.component';
import { ProfileEditComponent } from './modules/admin/pages/profile/partials/profile-edit/profile-edit.component';
import { PerfileComponent } from './modules/admin/pages/profile/perfile/perfile.component';
import { MisionComponent } from './modules/pages/mision/mision.component';
import { VisionComponent } from './modules/pages/vision/vision.component';
import { SomosComponent } from './modules/pages/somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BannerComponent,
    InformationComponent,
    CategoryComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    ModuleComponent,
    MenuSidebarComponent,
    FooterSidebarComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    PerfileComponent,
    MisionComponent,
    VisionComponent,
    SomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuComponent,
    NoticeComponent,
    HttpClientModule,
    CommonModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
