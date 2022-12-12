import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceDetailsComponent } from './sentence-details.component';

describe('SentenceDetailsComponent', () => {
  let component: SentenceDetailsComponent;
  let fixture: ComponentFixture<SentenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
