import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApoimentComponent } from './components/home/apoiment/apoiment.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { TestimonileComponent } from './components/home/testimonile/testimonile.component';
import { OurTeamComponent } from './components/home/our-team/our-team.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { PriceComponent } from './components/home/price/price.component';
import { LoginComponent } from './authPatient/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    NotFoundComponent,
    ApoimentComponent,
    BlogComponent,
    TestimonileComponent,
    OurTeamComponent,
    HeroComponent,
    PriceComponent,
    LoginComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
