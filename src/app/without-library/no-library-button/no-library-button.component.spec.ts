import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLibraryButtonComponent } from './no-library-button.component';

describe('NoLibraryButtonComponent', () => {
  let component: NoLibraryButtonComponent;
  let fixture: ComponentFixture<NoLibraryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLibraryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLibraryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
