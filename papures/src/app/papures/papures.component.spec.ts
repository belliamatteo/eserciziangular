import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapuresComponent } from './papures.component';

describe('PapuresComponent', () => {
  let component: PapuresComponent;
  let fixture: ComponentFixture<PapuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
