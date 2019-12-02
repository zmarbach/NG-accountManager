import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatPipe } from './repeat.pipe';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatPipe,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
