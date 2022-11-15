import {ChangeDetectionStrategy, Component, HostListener, Inject} from '@angular/core';
import {FL_CONTROL_HOST, FlBaseControlHost, FlCompareHost, FlControlSelector} from 'flex-controls';

@Component({
  selector: 'app-library-button',
  templateUrl: './library-button.component.html',
  styleUrls: ['./library-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryButtonComponent<T> extends FlControlSelector<T> {
  constructor(
      protected override compareHost: FlCompareHost<boolean | T>,
      @Inject(FL_CONTROL_HOST)
      protected override host: FlBaseControlHost<T>
  ) {
    super(compareHost, host);
  }

  @HostListener('click')
  clickEvent(): void {
    this.select();
  }
}
