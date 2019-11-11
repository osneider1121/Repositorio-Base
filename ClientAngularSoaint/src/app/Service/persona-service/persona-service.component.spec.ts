import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaServiceComponent } from './persona-service.component';

describe('PersonaServiceComponent', () => {
  let component: PersonaServiceComponent;
  let fixture: ComponentFixture<PersonaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
