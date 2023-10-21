import { Component, Input } from '@angular/core';
import { Expertise, PortfolioService, Project, areaOfExpertise } from 'app/services/portfolio/portfolio.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input({required: true}) project!: Project;

  constructor(private portfolioService: PortfolioService) {}

  getExpertiseIconsFromTechnologies(technologies: typeof areaOfExpertise[number][]): Expertise[] {
    return this.portfolioService.getExpertiseIcons(technologies);
  }
}
