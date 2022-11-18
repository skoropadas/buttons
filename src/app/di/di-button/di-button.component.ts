import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { DiButtonGroupComponent } from '../di-button-group/di-button-group.component';

@Component({
  selector: 'app-di-button',
  templateUrl: './di-button.component.html',
  styleUrls: ['./di-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiButtonComponent<T> implements OnDestroy {
  @Input()
  value: T | null = null;

  @HostBinding('attr.data-checked')
  selected: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private group: DiButtonGroupComponent<T>
  ) {
    this.group.registerButton(this);
  }

  @HostListener('click')
  clickEvent(): void {
    this.group.updateModel(this.value);
  }

  select(): void {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
  }

  deselect(): void {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.group.unregisterButton(this);
  }

}