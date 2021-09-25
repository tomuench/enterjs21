import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { GreeterInputComponent } from './greeter-input/greeter-input.component';
import { MessengerComponent } from './messenger/messenger.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    GreeterInputComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
