import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LibraryButtonGroupComponent } from './with-library/library-button-group/library-button-group.component';
import { LibraryButtonComponent } from './with-library/library-button/library-button.component';
import { NoLibraryButtonComponent } from './without-library/no-library-button/no-library-button.component';
import { NoLibraryButtonGroupComponent } from './without-library/no-library-button-group/no-library-button-group.component';

@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, LibraryButtonGroupComponent, LibraryButtonComponent, NoLibraryButtonComponent, NoLibraryButtonGroupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
