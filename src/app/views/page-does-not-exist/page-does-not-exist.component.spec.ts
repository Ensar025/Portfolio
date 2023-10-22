import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoesNotExistComponent } from './page-does-not-exist.component';

describe('PageDoesNotExistComponent', () => {
  let component: PageDoesNotExistComponent;
  let fixture: ComponentFixture<PageDoesNotExistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDoesNotExistComponent]
    });
    fixture = TestBed.createComponent(PageDoesNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
