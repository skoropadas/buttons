import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NoLibraryButtonComponent} from '../no-library-button/no-library-button.component';
import {startWith, switchMap} from 'rxjs/operators';
import {merge} from 'rxjs';

@Component({
  selector: 'app-no-library-button-group',
  templateUrl: './no-library-button-group.component.html',
  styleUrls: ['./no-library-button-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NoLibraryButtonGroupComponent
  }]
})
export class NoLibraryButtonGroupComponent<T> implements OnInit, AfterContentInit, ControlValueAccessor {
  @ContentChildren(NoLibraryButtonComponent)
  buttons: QueryList<NoLibraryButtonComponent<T>>;

  private onChange: (v: T) => void;
  private onTouched: () => void;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.buttons
        .changes
        .pipe(
            startWith(this.buttons),
            switchMap((buttons: QueryList<NoLibraryButtonComponent<T>>) =>
              merge(...buttons.map((b: NoLibraryButtonComponent<T>) => b.onSelected()))
            )
        )
        .subscribe((selected: NoLibraryButtonComponent<T>) => {
          this.selectValue(selected.value);
          this.onChange(selected.value);
        })
  }

  registerOnChange(fn: (v: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(obj: T): void {
    this.selectValue(obj);
  }

  private selectValue(v: T): void {
    this.buttons.forEach((b: NoLibraryButtonComponent<T>) => {
      b.value === v ? b.select() : b.deselect();
    })
  }
}
