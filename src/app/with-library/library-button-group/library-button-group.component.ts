import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FL_CONTROL_HOST, FL_DEFAULT_COMPARE, FlCompareFunction, FlCompareHost, FlControlHost} from 'flex-controls';

@Component({
  selector: 'app-library-button-group',
  templateUrl: './library-button-group.component.html',
  styleUrls: ['./library-button-group.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FL_CONTROL_HOST,
    useExisting: LibraryButtonGroupComponent,
  }]
})
export class LibraryButtonGroupComponent<T> extends FlControlHost<T> implements FlCompareHost<T> {
  @Input()
  compareFn: FlCompareFunction = FL_DEFAULT_COMPARE;

  constructor() {
    super();
  }
}
