import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { FormsModule } from '@angular/forms';
import { BookingPopUpComponent } from './booking-pop-up/booking-pop-up.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BookingPageComponent,
    BookingPopUpComponent
  ],
  entryComponents:[BookingPopUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
