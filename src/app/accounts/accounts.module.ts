

//this is our feature module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountsRoutingModule } from './accounts-routing.module';

import * as components from './components';

//any of the declared components can use the imports below
@NgModule({
  declarations: [
    components.AccountListComponent,
    components.AccountEditorComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule
  ]
})
export class AccountsModule { }
