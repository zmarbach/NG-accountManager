import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

//this shows what views to load when going to specified paths (webpage)
const routes: Routes = [
  { path:'list', component: components.AccountListComponent },
  //accountId has to be the same variable name on the component itself and the corresponding html file
  {  path: ':accountId', component: components.AccountEditorComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
