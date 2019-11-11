import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosServiceComponent } from './parametros-service.component';

describe('ParametrosServiceComponent', () => {
  let component: ParametrosServiceComponent;
  let fixture: ComponentFixture<ParametrosServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
