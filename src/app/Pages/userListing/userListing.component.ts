import { Component, OnInit } from "@angular/core";
import { InputModules } from "../../inputs/inputs.module";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../../services/ApiHelper.service";
import { ICustomerData } from "../../module/commonInterfaces";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-userDetail",
    standalone: true,
    imports: [InputModules, CommonModule, LucideAngularModule],
    templateUrl: './userListing.component.html',
    styleUrl: './userListing.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class UserListingComponent implements OnInit {
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { };

    usersData: ICustomerData[] = [];

    ngOnInit(): void {
        this._getCustomerData();
    }

    _getCustomerData() {
        this.api.get('/api/customers')
            .then((res) => {
                if (res?.status === 'ok') {
                    this.usersData = res?.data;
                }
            }).catch((err) => {
                console.log(err, 'ddddddddddddddddddddddddddddd')
            })
    }

    _handleRedirect(action: string, id: string) {
        if (action) {
            this.router.navigateByUrl(`/detail/${id}`)
        }
    }
}