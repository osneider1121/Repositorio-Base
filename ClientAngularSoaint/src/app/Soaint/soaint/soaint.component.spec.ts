import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoaintComponent } from './soaint.component';

describe('SoaintComponent', () => {
  let component: SoaintComponent;
  let fixture: ComponentFixture<SoaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
