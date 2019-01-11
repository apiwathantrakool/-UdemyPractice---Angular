import { Subject } from 'rxjs';

export class UsersService {
    // Subject is the observable and observer at the same time.
    userActivated = new Subject();
}
