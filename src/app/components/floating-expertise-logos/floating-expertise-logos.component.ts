import { Component } from '@angular/core';
import { FloatingLogosService } from 'app/services/floating-logos/floating-logos.service';

@Component({
  selector: 'app-floating-expertise-logos',
  templateUrl: './floating-expertise-logos.component.html',
  styleUrls: ['./floating-expertise-logos.component.scss']
})
export class FloatingExpertiseLogosComponent {
  animationEnabled: boolean = true;
  logos: string[] = [];

  constructor(private floatingLogoService: FloatingLogosService) {
    this.logos = this.floatingLogoService.getLogos();
    this.floatingLogoService.animationIsEnabled().subscribe(newValue => {
      this.animationEnabled = newValue;
    });  
  }

  toggleAnimation(): void {
    this.floatingLogoService.toggleAnimation();
  }
}
