import { Component } from '@angular/core';
import { ThemeService } from 'app/services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  darkModeEnabled = true;
  themeToggleOptions = [
    {
      icon: "pi pi-moon",
      value: true
    },
    {
      icon: "pi pi-sun",
      value: false
    }
  ];

  constructor(private themeService: ThemeService) {
    this.darkModeEnabled = this.themeService.darkModeEnabled();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

}
