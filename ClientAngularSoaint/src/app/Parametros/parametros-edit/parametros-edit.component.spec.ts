import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosEditComponent } from './parametros-edit.component';

describe('ParametrosEditComponent', () => {
  let component: ParametrosEditComponent;
  let fixture: ComponentFixture<ParametrosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
