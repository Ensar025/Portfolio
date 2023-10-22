import { Component } from '@angular/core';

export interface Qualification {
  title: string;
  institute: string;
  date: string;
}

export interface Education extends Qualification {
  location: string;
}

export interface WorkExperience extends Qualification {
  engagement: 'Part-time' | 'Full-time';
  location: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  educationalExperiences: Education[] = [
    {
      title: 'HBO & ICT Software',
      institute: 'Fontys Hogescholen',
      date: '09/2018 - 07/2022',
      location: 'Eindhoven'
    },
    {
      title: 'HAVO',
      institute: 'Stedelijk College Henegouwenlaan',
      date: '08/2012 - 06/2017',
      location: 'Eindhoven'
    }
  ];

  workExperiences: WorkExperience[] = [
    {
      title: 'Software Engineer',
      institute: 'Sioux',
      engagement: 'Full-time',
      date: '09/2022 - 10/2022',
      location: 'Eindhoven'
    },
    {
      title: 'Graduate Intern',
      institute: 'iO',
      engagement: 'Full-time',
      date: '02/2022 - 07/2022',
      location: 'Eindhoven'
    },
    {
      title: 'Software Engineer',
      institute: 'APS',
      engagement: 'Part-time',
      date: '02/2021 - 02/2022',
      location: 'Eindhoven'
    },
    {
      title: 'Software Engineer',
      institute: 'Sioux',
      engagement: 'Full-time',
      date: '09/2020 - 01/2021',
      location: 'Eindhoven'
    }
  ];

  certificates: Qualification[] = [
    {
      title: 'BSc HBO ICT & Software',
      institute: 'Fontys Hogescholen',
      date: '07/2022'
    },
    {
      title: 'Neural Networks and Deep Learning',
      institute: 'Coursera',
      date: '11/2021'
    },
    {
      title: 'Propedeuse ICT & Software',
      institute: 'Fontys Hogescholen',
      date: '07/2019'
    }
  ];

  proficientLanguages: string[] = ['Dutch', 'Turkish', 'English'];

}
