import { Subject } from 'rxjs/Subject';

export class UsersService {
    // Subject is the observable and observer at the same time.
    userActivated = new Subject();
}
