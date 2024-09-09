import { Injectable } from "@angular/core";
import { AuthServices } from "./AuthServices.service";
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import _ from "lodash";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService {

    constructor(private authService: AuthServices, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

        if (!this.authService._isUserLogin()) {
            if (!_.includes(['/signin', '/signup'], state?.url)) {
                alert('You are not allowed to view this page. Please login to access it');
                this.router.navigateByUrl("/signin");
                return false;
            }
        } else {
            if (_.includes(['/signin', '/signup'], state?.url)) {
                this.router.navigateByUrl("/");
                return false;
            }
        }

        return true;
    }
}

