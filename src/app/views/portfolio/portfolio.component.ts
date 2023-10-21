import { Component } from '@angular/core';
import { Expertise, PortfolioService, Project } from 'app/services/portfolio/portfolio.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  expertIconSelectionDialogVisible = false;
  clearSelectedExpertiseSubject: Subject<void> = new Subject<void>();
  
  constructor(private portfolioService: PortfolioService) {}

  getProjects(): Project[] {
    return this.portfolioService.getProjects();
  }

  getAreaOfExpertise(): Expertise[] {
    return this.portfolioService.getExpertiseIcons();
  }

  emitClearSelectedExpertise(): void {
    this.clearSelectedExpertiseSubject.next();
  }

  showDialog(): void {
    this.expertIconSelectionDialogVisible = true;
  }
}
