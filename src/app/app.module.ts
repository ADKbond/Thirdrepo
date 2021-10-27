import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { NewcompComponent } from './newcomp/newcomp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

//THIS NEEDS TO BE ADDED TO IMPORT TO USE THE formControl directive
// import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewcompComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
