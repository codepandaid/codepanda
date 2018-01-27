import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderModalComponent } from './coder-modal.component';

describe('CoderModalComponent', () => {
  let component: CoderModalComponent;
  let fixture: ComponentFixture<CoderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
