import { Component, Input } from '@angular/core';
import { Education, Qualification, WorkExperience } from 'app/views/about/about.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {
  @Input({required: true}) qualification!: Qualification | Education | WorkExperience;

  getLocation(): string {
    return (this.qualification as WorkExperience | Education).location;
  }

  getEngagement(): string {
    return (this.qualification as WorkExperience).engagement;
  }

}
