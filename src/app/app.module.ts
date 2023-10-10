// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG modules
import { SelectButtonModule } from 'primeng/selectbutton';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeToggleComponent
  ],
  imports: [
    SelectButtonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
