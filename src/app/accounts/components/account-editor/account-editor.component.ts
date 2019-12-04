import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../../services';
import { Account } from '../../../models';

@Component({
  selector: 'am-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  private accountId: number;
  account: Account;
  timesClicked = 0;

  constructor(
    //have to have this ActivatedRoute in order to access parameters in URL
    private route: ActivatedRoute,
    private accountsService: AccountsService
    ) { }

  ngOnInit() {
    console.warn('dont use snapshot')
    const params = this.route.snapshot.params;

    //the + converts the string parameter in the URL into a number
    this.accountId = +params.accountId;
    this.account = this.accountsService.get(this.accountId);
  }

  showTimesClicked(timesClicked: number){
    this.timesClicked = timesClicked; 
  }

  updateAccount(account: Account){
    this.accountsService.update(account);
  }
}
