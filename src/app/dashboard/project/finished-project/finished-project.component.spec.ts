import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedProjectComponent } from './finished-project.component';

describe('FinishedProjectComponent', () => {
  let component: FinishedProjectComponent;
  let fixture: ComponentFixture<FinishedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
