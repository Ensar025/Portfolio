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

    if (today.getMonth() === this.birthDate.getMonth() && today.getDate() === this.birthDate.getDate()) {
      this.birthday = true;
    }

    timer(0, 1000).subscribe(() => {
      this.age = this.getCurrentAge();
    });
  }

  private getCurrentAge(): LiveAge {
    const currentDate = new Date();

    const birthYear = this.birthDate.getUTCFullYear();

    // Leap years
    const february = (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = currentDate.getUTCFullYear() - birthYear;
    let monthDiff = currentDate.getUTCMonth() - this.birthDate.getUTCMonth();
    let dayDiff = currentDate.getUTCDate() - this.birthDate.getUTCDate();
    let hourDiff = currentDate.getUTCHours() - this.birthDate.getUTCHours();
    let minuteDiff = currentDate.getUTCMinutes() - this.birthDate.getUTCMinutes();
    let secondDiff = currentDate.getUTCSeconds() - this.birthDate.getUTCSeconds();

    if (secondDiff < 0) {
      minuteDiff--;
      secondDiff += 60
    }

    if (minuteDiff < 0) {
      hourDiff--;
      minuteDiff += 60;
    }

    if (hourDiff < 0) {
      dayDiff--;
      hourDiff += 24;
    }

    if (dayDiff < 0) {
      monthDiff--;

      if (monthDiff > 0) {
        dayDiff += daysInMonth[monthDiff];
      }
    }

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
      dayDiff += daysInMonth[monthDiff];
    }

    return {
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
      hours: hourDiff,
      minutes: minuteDiff,
      seconds: secondDiff
    };

  //   const ageInMillis = new Date(Date.now() - this.birthDate.getTime());

  //   return {
  //     years: ageInMillis.getUTCFullYear() - 1970,
  //     months: ageInMillis.getUTCMonth(),
  //     days: ageInMillis.getUTCDate(),
  //     hours: ageInMillis.getUTCHours(),
  //     minutes: ageInMillis.getUTCMinutes(),
  //     seconds: ageInMillis.getUTCSeconds()
  // };

  
  }
}
