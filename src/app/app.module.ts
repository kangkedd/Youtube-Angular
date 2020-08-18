import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/nav-bar/register/register.component';
import { LoginComponent } from './components/nav-bar/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { VideoHomeComponent } from './components/home/video-home/video-home.component';
import { TrendingComponent } from './components/trending/trending.component';
import { VideoTrendingComponent } from './components/trending/video-trending/video-trending.component';
import { TrendingCategoriesComponent } from './components/trending/trending-categories/trending-categories.component';
import { SubcriptionsComponent } from './components/subcriptions/subcriptions.component';
import { LibraryComponent } from './components/library/library.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    VideoHomeComponent,
    TrendingComponent,
    VideoTrendingComponent,
    TrendingCategoriesComponent,
    SubcriptionsComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
