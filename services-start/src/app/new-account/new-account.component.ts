import { AccountsService } from './../services/accounts.service';
import { LoggingService } from '../services/logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('New status is: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
