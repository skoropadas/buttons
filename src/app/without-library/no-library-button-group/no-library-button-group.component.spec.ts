import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLibraryButtonGroupComponent } from './no-library-button-group.component';

describe('NoLibraryButtonGroupComponent', () => {
  let component: NoLibraryButtonGroupComponent;
  let fixture: ComponentFixture<NoLibraryButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLibraryButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLibraryButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
