import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, Event, RouterEvent } from '@angular/router';
import { FloatingLogosService } from 'app/services/floating-logos/floating-logos.service';
import { ThemeService } from 'app/services/theme/theme.service';
import { MenuItem } from 'primeng/api';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  currentRoute !: string;
  darkModeEnabled = true;
  animationEnabled = true;

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

  items: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'pi pi-folder',
      routerLink: '/portfolio'
    }
  ]

  constructor(public router: Router,private floatingLogoService: FloatingLogosService, private themeService: ThemeService) {
    this.router.events.pipe(
      filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.currentRoute = e.url;
      console.log(this.currentRoute);
      
    });

    this.darkModeEnabled = this.themeService.darkModeEnabled();
    this.floatingLogoService.animationIsEnabled().subscribe(newValue => {
      this.animationEnabled = newValue;
    });
  }
  ngAfterViewInit(): void {
    this.themeService.editLogo();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleAnimation(): void {
    this.floatingLogoService.toggleAnimation();
  }
}
