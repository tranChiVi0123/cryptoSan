import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardChallengesComponent } from './board-challenges.component';

describe('BoardChallengesComponent', () => {
  let component: BoardChallengesComponent;
  let fixture: ComponentFixture<BoardChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
