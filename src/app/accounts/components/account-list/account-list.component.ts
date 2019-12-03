import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { AccountsService } from '../../../services/';

@Component({
  selector: 'am-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(private accountService : AccountsService) {

  };

  accounts: Account[]

  ngOnInit() {
    this.accounts = this.accountService.getAll();
  }

}

