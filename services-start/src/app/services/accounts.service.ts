import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    constructor(private loggingService: LoggingService ) {}

    statusUpdate = new EventEmitter<string>();

    addAccount(newName: string, newStatus: string) {
        this.accounts.push({name: newName, status: newStatus});
        this.loggingService.logStatusChange(newStatus);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}
