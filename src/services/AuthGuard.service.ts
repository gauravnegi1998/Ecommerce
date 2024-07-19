import { Injectable } from "@angular/core";
import { AuthServices } from "./AuthServices.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService {

    constructor(private authService: AuthServices, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

        if (!this.authService._isUserLogin()) {
            alert('You are not allowed to view this page. Please login to access it');
            this.router.navigateByUrl("/signin");
            return false;
        }

        return true;
    }
}