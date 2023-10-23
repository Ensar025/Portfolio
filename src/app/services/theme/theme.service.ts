import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_ELEMENT_ID = "app-theme";
  private readonly DARK_THEME = "md-dark-indigo";
  private readonly LIGHT_THEME = "md-light-indigo";
  private readonly LOGO_ID = "logo";
  private readonly LOGO_PREFIX = "assets/"
  private readonly LOGO_LIGHT = "logo-light.svg";
  private readonly LOGO_DARK = "logo-dark.svg";

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

  public editLogo(): void {
    const logo = this.document.getElementById(this.LOGO_ID) as HTMLImageElement;

    if (logo) {
      let logoSrc = this.isDarkMode ? this.LOGO_DARK : this.LOGO_LIGHT;
      logo.src = this.LOGO_PREFIX + logoSrc;
    } else {
      console.error(`Could not change logo as there is no element with id '${this.LOGO_ID}'.`);
    }
  }

  private updateTheme(): void {
    const themeLink = this.document.getElementById(this.THEME_ELEMENT_ID) as HTMLLinkElement;

    if (themeLink) {
      let newTheme = this.isDarkMode ? this.DARK_THEME : this.LIGHT_THEME;
      newTheme += ".css";

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
    this.editLogo();
  }
}
