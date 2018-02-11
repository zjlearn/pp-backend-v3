import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandledProcessComponent } from './handled-process.component';

describe('HandledProcessComponent', () => {
  let component: HandledProcessComponent;
  let fixture: ComponentFixture<HandledProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandledProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandledProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
