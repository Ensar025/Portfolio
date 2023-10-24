import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

interface LiveAge {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-live-age',
  templateUrl: './live-age.component.html',
  styleUrls: ['./live-age.component.scss']
})
export class LiveAgeComponent implements OnInit {
  birthday = false;
  birthDate = new Date(2000, 5, 1, 13, 43, 0);
  age!: LiveAge;

  ngOnInit() {
    const today = new Date();

    if (today.getMonth() + 1 === this.birthDate.getMonth() + 1 && today.getDate() === this.birthDate.getDate()) {
      this.birthday = true;
    }

    timer(0, 1000).subscribe(() => {
      this.age = this.getCurrentAge();
    });
  }

  private getCurrentAge(): LiveAge {
    const ageInMillis = new Date(Date.now() - this.birthDate.getTime());

    return {
      years: ageInMillis.getUTCFullYear() - 1970,
      months: ageInMillis.getUTCMonth(),
      days: ageInMillis.getUTCDate() - 1,
      hours: ageInMillis.getUTCHours(),
      minutes: ageInMillis.getUTCMinutes(),
      seconds: ageInMillis.getUTCSeconds()
  };
  }
}
