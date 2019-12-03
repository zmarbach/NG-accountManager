import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatPipe } from './repeat.pipe';
import { CommonModule } from '@angular/common';

//any of the declared components can use the imports below
@NgModule({
  declarations: [
    AppComponent,
    RepeatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//this routes to AccountsModule (see loadChildren function on app-routing.module.ts)
export class AppModule { }
