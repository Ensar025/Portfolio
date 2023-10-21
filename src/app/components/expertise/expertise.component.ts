import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Expertise, areaOfExpertise } from 'app/services/portfolio/portfolio.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit, OnDestroy {
  @Input({required: true}) expertise!: Expertise;
  @Input({required: true}) clearSelectedEvent!: Observable<void>;

  @Output() expertiseClickedEvent = new EventEmitter<typeof areaOfExpertise[number]>();

  selected = false;
  private clearSelectedSubscription!: Subscription;

  ngOnInit(): void {
    this.clearSelectedSubscription = this.clearSelectedEvent.subscribe(() => {
      this.selected = false;
    });
  }

  ngOnDestroy(): void {
    this.clearSelectedSubscription.unsubscribe();
  }

  expertiseClicked(): void {
    this.selected = !this.selected;
    this.expertiseClickedEvent.emit(this.expertise.name); 
  }

}
