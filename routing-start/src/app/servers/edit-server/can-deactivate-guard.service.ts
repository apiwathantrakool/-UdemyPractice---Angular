import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(
        component: CanComponentDeactivate, // Component which implement this interface.
        currentRoute: ActivatedRouteSnapshot, // Current Route properties.
        currentState: RouterStateSnapshot, // Current URL.
        nextState?: RouterStateSnapshot, // Next URl. ("?" sign mean this is a optional argument/ parameter).
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
