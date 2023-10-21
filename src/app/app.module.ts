// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG modules
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FloatingExpertiseLogosComponent } from './components/floating-expertise-logos/floating-expertise-logos.component';
import { MenuComponent } from './components/menu/menu.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FloatingExpertiseLogosComponent,
    MenuComponent,
    PortfolioComponent,
    ExpertiseComponent,
    ProjectComponent
  ],
  imports: [
    ToggleButtonModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
