import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PapuresComponent } from './papures/papures.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PapuresComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
