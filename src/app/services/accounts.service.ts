import { Injectable } from '@angular/core';
import { Account } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private accounts: Account[] = [
    new Account({
      id: 1,
      name: 'Skyler',
      email: 'skyler.tweedie@improving.com',
      isEmployee: true,
      departmentId: 0,
      phoneNumbers: []
    }),
    new Account({
      id: 2,
      name: 'Zach',
      email: 'fake@email.com',
      isEmployee: true,
      departmentId: 2,
      phoneNumbers: []
    }),
    new Account({
      id: 3,
      name: 'Skyler',
      email: 'saggy_bob@hotmail.com',
      isEmployee: false,
      departmentId: 3,
      phoneNumbers: []
    })
  ];

  getAll(): Account[] {
    return this.accounts;
  }

  get(id: number): Account {
    for (let i = 0; i< this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        return this.accounts[i];
      }
    }

    return null;
  }

  delete(account: Account) {
    return null;
  }
}
