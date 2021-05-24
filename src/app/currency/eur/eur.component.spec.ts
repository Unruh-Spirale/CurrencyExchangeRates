import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurComponent } from './eur.component';

describe('EurComponent', () => {
  let component: EurComponent;
  let fixture: ComponentFixture<EurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
