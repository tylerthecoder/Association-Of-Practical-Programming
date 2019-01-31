import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CageSlideComponent } from './cage-slide.component';

describe('CageSlideComponent', () => {
  let component: CageSlideComponent;
  let fixture: ComponentFixture<CageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
