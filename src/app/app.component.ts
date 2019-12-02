import { Component, OnInit } from '@angular/core';

import { Account } from './models';
import { AccountsService } from './services';
import { AlertService } from './alert.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public accountsService: AccountsService,
    public alertService: AlertService
  ) {
  }

  accounts: Account[];

  ngOnInit() {
    this.accounts = this.accountsService.getAll();
  }

  deleteAccount(account: Account) {
    if (this.alertService.confirm(`Are you sure you want to delete ${account.name}?`)) {
      this.accountsService.delete(account);
    } else {
      // do nothing
    }

    // if (window.confirm(`Are you sure you want to delete ${account.name}?`)) {
    //   // do the delete thing
    // }
  }
}
