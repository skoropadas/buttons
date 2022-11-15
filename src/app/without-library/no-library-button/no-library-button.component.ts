import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
  selector: 'app-no-library-button',
  templateUrl: './no-library-button.component.html',
  styleUrls: ['./no-library-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoLibraryButtonComponent<T> {
  @Input()
  value: T | null = null;

  @HostBinding('attr.data-checked')
  selected: boolean = false;

  private selected$: Subject<void> = new Subject<void>();

  constructor(
      private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  onSelected(): Observable<NoLibraryButtonComponent<T>> {
    return this.selected$.asObservable().pipe(mapTo(this));
  }

  @HostListener('click')
  clickEvent(): void {
    this.selected$.next();
  }

  select(): void {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
  }

  deselect(): void {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
  }
}
