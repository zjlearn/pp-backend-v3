import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderingComponent } from './tendering.component';

describe('TenderingComponent', () => {
  let component: TenderingComponent;
  let fixture: ComponentFixture<TenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
