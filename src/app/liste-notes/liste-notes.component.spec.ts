import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNotesComponent } from './liste-notes.component';

describe('ListeNotesComponent', () => {
  let component: ListeNotesComponent;
  let fixture: ComponentFixture<ListeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
