import { Component} from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers: string[] = [];

  constructor(private usersService: UsersService) {
    this.activeUsers = usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
