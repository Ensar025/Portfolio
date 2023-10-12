import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingExpertiseLogosComponent } from './floating-expertise-logos.component';

describe('FloatingExpertiseLogosComponent', () => {
  let component: FloatingExpertiseLogosComponent;
  let fixture: ComponentFixture<FloatingExpertiseLogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingExpertiseLogosComponent]
    });
    fixture = TestBed.createComponent(FloatingExpertiseLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
