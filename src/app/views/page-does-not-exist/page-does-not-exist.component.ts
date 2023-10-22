import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-does-not-exist',
  templateUrl: './page-does-not-exist.component.html',
  styleUrls: ['./page-does-not-exist.component.scss']
})
export class PageDoesNotExistComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}
