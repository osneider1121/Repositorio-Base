import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosAddComponent } from './parametros-add.component';

describe('ParametrosAddComponent', () => {
  let component: ParametrosAddComponent;
  let fixture: ComponentFixture<ParametrosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
