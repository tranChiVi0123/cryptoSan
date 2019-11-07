import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinegereComponent } from './vinegere.component';

describe('VinegereComponent', () => {
  let component: VinegereComponent;
  let fixture: ComponentFixture<VinegereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinegereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinegereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
