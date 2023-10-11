import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  socials = [
    {
      name: "GitHub",
      icon: "pi pi-github",
      url: "https://github.com/Ensar025"
    },
    {
      name: "LinkedIn",
      icon: "pi pi-linkedin",
      url: "https://www.linkedin.com/in/muhammed-ensar-ishakoglu/"
    }
  ]

}
