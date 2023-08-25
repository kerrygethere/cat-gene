import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterComponent } from './litter.component';

describe('LitterComponent', () => {
  let component: LitterComponent;
  let fixture: ComponentFixture<LitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitterComponent]
    });
    fixture = TestBed.createComponent(LitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
