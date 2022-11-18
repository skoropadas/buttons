import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DiButtonComponent } from '../di-button/di-button.component';

@Component({
  selector: 'app-di-button-group',
  templateUrl: './di-button-group.component.html',
  styleUrls: ['./di-button-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DiButtonGroupComponent,
      multi: true,
    },
  ],
})
export class DiButtonGroupComponent<T> implements ControlValueAccessor, AfterViewInit {
  buttons: Set<DiButtonComponent<T>> = new Set();
  private onChange: (v: T) => void;
  private onTouched: () => void;
  private value: T | null = null;

  ngAfterViewInit(): void {
    this.selectValue(this.value)
  }

  registerButton(btn: DiButtonComponent<T>): void {
    this.buttons.add(btn);
    this.selectValue(this.value);
  }

  unregisterButton(btn: DiButtonComponent<T>): void {
    this.buttons.delete(btn);
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

  updateModel(value: T | null): void {
    this.value = value;
    this.onChange(this.value);
    this.selectValue(value);
  }

  private selectValue(v: T): void {
    this.buttons?.forEach((b: DiButtonComponent<T>) => {
      b.value === v ? b.select() : b.deselect();
    });
  }

}