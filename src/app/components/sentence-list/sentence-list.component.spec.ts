import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesListComponent } from './sentence-list.component';

describe('SentencesListComponent', () => {
  let component: SentencesListComponent;
  let fixture: ComponentFixture<SentencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
