// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG modules
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FloatingExpertiseLogosComponent } from './components/floating-expertise-logos/floating-expertise-logos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeToggleComponent,
    FloatingExpertiseLogosComponent
  ],
  imports: [
    ToggleButtonModule,
    ButtonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
