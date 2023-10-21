import { Injectable } from '@angular/core';

export const areaOfExpertise = [
  "Angular",
  "ASP.NET",
  "Azure",
  "C#",
  "Docker",
  "Gatsby",
  "Git",
  "GitHub Actions",
  "GraphQL",
  "Java",
  "Kubernetes",
  "Nest JS",
  "Node JS",
  "Numpy",
  "Python",
  "React",
  "Sass",
  "Terraform",
  "TypeORM",
  "TypeScript",
  "Ubuntu",
  "Vue"
] as const;

export interface Expertise {
  name: typeof areaOfExpertise[number];
  src: string;
}

export interface Project {
  title: string;
  description: string;
  madeWith: typeof areaOfExpertise[number][];
  publicRepo?: string;
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolio: Project[] = [
    {
      title: 'Meishako Portfolio',
      description: 'The website you are viewing now!',
      madeWith: ['Angular', 'TypeScript', 'Git', 'GitHub Actions', 'Sass'],
      publicRepo: 'https://github.com/Ensar025/Portfolio'
    },
    {
      title: 'Philips Pathology Scanner User Interface',
      description: 'Whilst working at Sioux I got assigned to a project for Philips where we updated the interface of the Pathology Scanner from AngularJS to the newest Angular version.',
      madeWith: ['Angular', 'TypeScript', 'Docker', 'Git', 'Ubuntu', 'Sass']
    },
    {
      title: 'Dependency Health Monitor at iO',
      description: 'During my graduation assignment, I created an application that is capable of determining the financial health of Open-Source projects with the goal of improving Open-Source sustainability.',
      madeWith: ['Vue', 'Node JS', 'GraphQL', 'TypeScript', 'Azure', 'Git', 'Sass'],
      publicRepo: 'https://github.com/isaaceindhoven/dependency-health-monitor'
    },
    {
      title: 'Cat image classifier',
      description: 'During a Neural Networks course I followed, I created my own multi-layered Neural Network which is able to classify if an image is a cat or not.',
      madeWith: ['Python', 'Numpy'],
      publicRepo: 'https://gitlab.com/EnsarIshakoglu/Cat-classifier-NN'
    },
    {
      title: 'Snake AI using Q-learning',
      description: 'As my first Machine Learning project, I created an AI using Q-learning which can play the Snake game.',
      madeWith: ['Python', 'Numpy', 'Git'],
      publicRepo: 'https://gitlab.com/openai-projects/snake-ai-self/-/tree/dev?ref_type=heads'
    },
    {
      title: 'Kwetter',
      description: 'Kwetter is a Twitter clone made to get experience with the techniques Terraform, Kubernetes, Docker, and Microservices. Kwetter was made in the span of 4 months.',
      madeWith: ['Angular', 'ASP.NET', 'Docker', 'TypeScript', 'Terraform', 'Kubernetes', 'Git', 'C#', 'Sass'],
      publicRepo: 'https://gitlab.com/semester6-ensar'
    },
    {
      title: 'Vitality Living Lab',
      description: 'Together with my group, we created an application which helps users of the VLL data system to find, work, and visualise data in a way that fits their needs and engages them to actively share new data of their research in their system.',
      madeWith: ['Vue', 'Nest JS', 'Docker', 'Git', 'TypeORM']
    },
    {
      title: 'Akzonobel Webshop',
      description: 'Together with my colleagues, I created a webshop for AkzoNobel which they use to sell paint. I mainly worked on the frontend of this project.',
      madeWith: ['Gatsby', 'GraphQL', 'Git']
    },
    {
      title: 'Intranet for the APS Group',
      description: 'For my internship I had to develop an intranet page for the APS Group. By using this intranet, users are able to find all applications which they need for work, select favourite applications, and can read news about the APS.',
      madeWith: ['Angular', 'Node JS', 'GraphQL', 'TypeScript', 'Git']
    },
    {
      title: 'Meeting App',
      description: 'ISAAC, now iO, had a problem with not knowing which meeting rooms were available. To solve this problem my team and I created a progressive web app to plan meetings. This application will be run on tablets on their meeting rooms, so employees can quickly see which rooms are available and which not.',
      madeWith: ['Java', 'Vue', 'Git']
    },
    {
      title: 'Darts Calculator',
      description: 'Whenever playing darts with my older brother we were in need of a simple calculator app. As I was interested in Angular at that time, I used that oppurtunity to make a darts calculator app with Angular. We were very happy with the result and used it a lot. The darts calculator app is still live!',
      madeWith: ['Angular', 'Git', 'TypeScript', 'Sass'],
      publicRepo: 'https://gitlab.com/EnsarIshakoglu/darts-calculator',
      demoUrl: 'https://ensarishakoglu.gitlab.io/darts-calculator/'
    }
  ];

  private expertiseIcons: Expertise[] = areaOfExpertise.map(expertise => ({
    name: expertise,
    src: `assets/svgs/${
      expertise
        .replace(' ', '_')
        .replace('#', 'sharp')
        .replace('.', 'dot')
        .toLowerCase()
    }.svg`
  }));

  constructor() { }

  public getProjects(): Project[] {
    return this.portfolio;
  }

  public getExpertiseIcons(expertiseNames?: typeof areaOfExpertise[number][]): Expertise[] {
    if (expertiseNames) {
      const set = new Set(expertiseNames);
      return this.expertiseIcons.filter(expertiseIcon => set.has(expertiseIcon.name));
    }
    
    return this.expertiseIcons;
  }
}
