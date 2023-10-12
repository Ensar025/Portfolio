import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_ELEMENT_ID = "app-theme";
  private readonly THEME_PREFIX = "src/themes/";
  private readonly DARK_THEME = this.THEME_PREFIX + "md-dark-indigo";
  private readonly LIGHT_THEME = this.THEME_PREFIX + "md-light-indigo";

  private isDarkMode = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.initializePreferredColorScheme();
  }

  // Defaults to dark mode
  private initializePreferredColorScheme(): void {
    const lightModeEnabled = window.matchMedia("(prefers-color-scheme: light)").matches;
    

    if (lightModeEnabled) {
      this.isDarkMode = false;
    }

    this.updateTheme();
  }

  private updateTheme(): void {
    const themeLink = this.document.getElementById(this.THEME_ELEMENT_ID) as HTMLLinkElement;

    if (themeLink) {
      let newTheme = this.isDarkMode ? this.DARK_THEME : this.LIGHT_THEME;
      newTheme += ".scss";

      themeLink.href = newTheme;
    } else {
      console.error(`Could not change theme as there is no element with id '${this.THEME_ELEMENT_ID}'.`);
    }
  }

  public darkModeEnabled(): boolean {
    return this.isDarkMode;
  }

  public toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }
}