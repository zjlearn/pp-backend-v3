import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcheckComponent } from './secondcheck.component';

describe('SecondcheckComponent', () => {
  let component: SecondcheckComponent;
  let fixture: ComponentFixture<SecondcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
