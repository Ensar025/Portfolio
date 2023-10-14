import { Injectable } from '@angular/core';
import { logos } from './constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloatingLogosService {
  private animationEnabled = new BehaviorSubject<boolean>(true);

  constructor() {}

  public animationIsEnabled(): Observable<boolean> {
    return this.animationEnabled;
  }

  public toggleAnimation(): void {
    this.animationEnabled.next(!this.animationEnabled.getValue());
  }

  public getLogos(): string[] {
    return logos;
  }
}
