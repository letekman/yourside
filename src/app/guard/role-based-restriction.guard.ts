import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class RoleBasedRestrictionGuard implements CanActivate {


    constructor(private tokenStorageService: TokenStorageService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (next.data.role.includes(this.tokenStorageService.getAuthority())) {


         return true;
        } else {
            this.router.navigateByUrl('/login').then();
            return false;
        }
    }
}
