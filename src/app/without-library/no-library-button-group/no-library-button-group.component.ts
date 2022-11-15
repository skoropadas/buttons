import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NoLibraryButtonComponent } from '../no-library-button/no-library-button.component';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-no-library-button-group',
  templateUrl: './no-library-button-group.component.html',
  styleUrls: ['./no-library-button-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NoLibraryButtonGroupComponent,
      multi: true,
    },
  ],
})
export class NoLibraryButtonGroupComponent<T>
  implements AfterContentInit, ControlValueAccessor
{
  @ContentChildren(NoLibraryButtonComponent)
  buttons?: QueryList<NoLibraryButtonComponent<T>>;

  private onChange: (v: T) => void;
  private onTouched: () => void;
  private value: T | null = null;

  constructor() {}

  ngAfterContentInit(): void {
    this.buttons.changes
      .pipe(
        tap(() => this.selectValue(this.value)),
        startWith(this.buttons),
        switchMap((buttons: QueryList<NoLibraryButtonComponent<T>>) =>
          merge(
            ...buttons.map((b: NoLibraryButtonComponent<T>) => b.onSelected())
          )
        )
      )
      .subscribe((selected: NoLibraryButtonComponent<T>) => {
        this.value = selected.value;
        this.selectValue(this.value);
        this.onChange(this.value);
      });
  }

  registerOnChange(fn: (v: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(obj: T): void {
    this.value = obj;
    this.selectValue(this.value);
  }

  private selectValue(v: T): void {
    this.buttons?.forEach((b: NoLibraryButtonComponent<T>) => {
      b.value === v ? b.select() : b.deselect();
    });
  }
}
