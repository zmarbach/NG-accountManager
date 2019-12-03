

//this is our feature module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import * as components from './components';

@NgModule({
  declarations: [
    components.AccountListComponent,
    components.AccountEditorComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
