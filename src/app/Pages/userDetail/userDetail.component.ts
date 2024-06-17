import { Component, OnInit } from "@angular/core";
import { InputModules } from "../../inputs/inputs.module";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../../services/ApiHelper.service";
import { ICustomerData } from "../../module/commonInterfaces";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";

@Component({
    selector: "app-userDetail",
    standalone: true,
    imports: [InputModules, CommonModule, LucideAngularModule],
    templateUrl: './userDetail.component.html',
    styleUrl: './userDetail.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class UserDetailComponent implements OnInit {
    constructor(private api: ApiService) { };

    usersData: ICustomerData[] = [];

    ngOnInit(): void {
        this._getCustomerData();
    }

    _getCustomerData() {
        this.api.get('/api/customers')
            .then((res) => {
                if (res?.status === 'ok') {
                    console.log(res, 'dddddddddddddddd uuuuuuuuuuuuuuuuuuuuuuuuuu')
                    this.usersData = res?.data;
                }
            }).catch((err) => {
                console.log(err, 'ddddddddddddddddddddddddddddd')
            })
    }
}