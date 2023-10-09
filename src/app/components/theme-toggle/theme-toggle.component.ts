import { Component } from '@angular/core';
import { ThemeService } from 'app/services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  darkModeEnabled = true;

  constructor(private themeService: ThemeService) {
    this.darkModeEnabled = this.themeService.darkModeEnabled();
  }

  toggleTheme(): void {
    console.log(this.darkModeEnabled);
    
    this.themeService.toggleTheme();
  }

}
