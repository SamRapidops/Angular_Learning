import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { Keyup2Component } from './keyup2/keyup2.component';
import { Keyup3Component } from './keyup3/keyup3.component';
import { Keyup4Component } from './keyup4/keyup4.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    Keyup2Component,
    Keyup3Component,
    Keyup4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
