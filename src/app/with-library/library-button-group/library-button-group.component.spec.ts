import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryButtonGroupComponent } from './library-button-group.component';

describe('LibraryButtonGroupComponent', () => {
  let component: LibraryButtonGroupComponent;
  let fixture: ComponentFixture<LibraryButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
