import { Component } from '@angular/core';
import { Expertise, PortfolioService, Project, areaOfExpertise } from 'app/services/portfolio/portfolio.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  expertIconSelectionDialogVisible = false;
  clearSelectedExpertiseSubject: Subject<void> = new Subject<void>();
  expertiseToFilterProjects = new Set<typeof areaOfExpertise[number]>();

  readonly projects!: Set<Project>;
  filteredProjects!: Set<Project>;
  
  constructor(private portfolioService: PortfolioService) {
    this.projects = new Set<Project>(this.getProjects());
    this.filteredProjects = structuredClone(this.projects);
  }

  getProjects(): Project[] {
    return this.portfolioService.getProjects();
  }

  getAreaOfExpertise(): Expertise[] {
    return this.portfolioService.getExpertiseIcons();
  }

  emitClearSelectedExpertise(): void {
    this.clearSelectedExpertiseSubject.next();
  }

  expertiseClicked(clickedExpertise: typeof areaOfExpertise[number]): void {
    if (this.expertiseToFilterProjects.has(clickedExpertise)) {
      this.expertiseToFilterProjects.delete(clickedExpertise);
    } else {
      this.expertiseToFilterProjects.add(clickedExpertise);
    }    

    this.updateFilteredProjects();
  }

  showDialog(): void {
    this.expertIconSelectionDialogVisible = true;
  }

  private updateFilteredProjects(): void {
    this.filteredProjects = new Set<Project>();

    if (this.expertiseToFilterProjects.size === 0) {
      this.filteredProjects = this.projects;
      return;
    }

    for (let project of this.projects) {
      if (project.madeWith.some(expertise => this.expertiseToFilterProjects.has(expertise))) {
        this.filteredProjects.add(project);
      }
    }
  }
}
