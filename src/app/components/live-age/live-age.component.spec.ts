import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAgeComponent } from './live-age.component';

describe('LiveAgeComponent', () => {
  let component: LiveAgeComponent;
  let fixture: ComponentFixture<LiveAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveAgeComponent]
    });
    fixture = TestBed.createComponent(LiveAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
