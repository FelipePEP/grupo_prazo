import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const ls = localStorage;

        if (ls.token != null && ls.isAdmin === 'checked') {
            return true;
        } else {
            alert('você não possui permissão para esta área do site.');
            this.router.navigate(['/home']);
        }
    }

    canActivateDefault(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const ls = localStorage;

        if (ls.token != null) {
            return true;
        } else {
            this.router.navigate(['/home']);
        }
    }
}
