import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryButtonComponent } from './library-button.component';

describe('LibraryButtonComponent', () => {
  let component: LibraryButtonComponent;
  let fixture: ComponentFixture<LibraryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
