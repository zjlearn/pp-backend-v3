import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhandledProcessComponent } from './unhandled-process.component';

describe('UnhandledProcessComponent', () => {
  let component: UnhandledProcessComponent;
  let fixture: ComponentFixture<UnhandledProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhandledProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhandledProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
