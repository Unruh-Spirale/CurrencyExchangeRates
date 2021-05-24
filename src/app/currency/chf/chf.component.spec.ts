import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChfComponent } from './chf.component';

describe('ChfComponent', () => {
  let component: ChfComponent;
  let fixture: ComponentFixture<ChfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
