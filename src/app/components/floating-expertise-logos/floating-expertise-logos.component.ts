import { Component } from '@angular/core';
import { FloatingLogosService } from 'app/services/floating-logos/floating-logos.service';
import { Expertise, PortfolioService, areaOfExpertise } from 'app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-floating-expertise-logos',
  templateUrl: './floating-expertise-logos.component.html',
  styleUrls: ['./floating-expertise-logos.component.scss']
})
export class FloatingExpertiseLogosComponent {
  animationEnabled: boolean = true;
  floatingAreaOfExpertise: typeof areaOfExpertise[number][] = [
    'Angular',
    'React',
    'Vue',
    'Python',
    'ASP.NET',
    'Java',
    'Azure',
    'TypeScript',
    'Docker',
    'Git',
    'Gatsby',
    'Node JS'
  ];
  areaOfExpertise: Expertise[] = [];

  constructor(private floatingLogoService: FloatingLogosService, private portfolioService: PortfolioService) {
    this.areaOfExpertise = this.portfolioService.getExpertiseIcons();
    this.floatingLogoService.animationIsEnabled().subscribe(newValue => {
      this.animationEnabled = newValue;
    });  
  }

  toggleAnimation(): void {
    this.floatingLogoService.toggleAnimation();
  }
}
