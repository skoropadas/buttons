import {ChangeDetectionStrategy, Component, VERSION} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  fruits: string[] = ['Apple', 'Kiwi', 'Watermelon', 'Banana'];
  libraryFC: FormControl = new FormControl<any>('');
  noLibraryFC: FormControl = new FormControl<any>('');
  diFC: FormControl = new FormControl<any>('');
}
