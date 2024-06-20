import { Component, OnInit } from "@angular/core";
import { InputModules } from "../../inputs/inputs.module";
import { CommonModule } from "@angular/common";
import { ApiService } from "../../../services/ApiHelper.service";
import { ICustomerData } from "../../module/commonInterfaces";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import _ from "lodash";
@Component({
    selector: "app-userDetail",
    standalone: true,
    imports: [InputModules, CommonModule, LucideAngularModule, FormsModule],
    templateUrl: './userListing.component.html',
    styleUrl: './userListing.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class UserListingComponent implements OnInit {
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { };

    private searchSubject = new Subject<string>();
    private readonly debounceTimeMs = 500; // Set the debounce time (in milliseconds)

    usersData: ICustomerData[] = [];
    searchText: string = "";
    displayDropdown: boolean = false;
    filterBy: { name: string, query: string } = { name: 'Search By', query: 'all' };

    filterByOptions: { name: string, query: string }[] = [
        { name: 'Search By', query: 'all' },
        { name: "First Name", query: "firstName" },
        { name: "Last Name", query: "lastName" },
        { name: "E-mail", query: "email" },
        { name: "Address", query: "address" },
        { name: "Country", query: "country" },
        { name: "State", query: "state" },
        { name: "City", query: "city" },
        { name: "Zip Code", query: "zipCode" },
    ];

    ngOnInit(): void {
        this._getCustomerData();

        this.searchSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
            this._getCustomerData(searchValue);
        });
    }

    _getCustomerData(searchValue?: string) {
        let URL = "/api/customers";
        if (searchValue) {
            URL = `/api/customers?${this.filterBy?.query}=${this.searchText}`
        }
        this.api.get(URL)
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

    _handelSearch(data: string) {
        console.log(data, 'searchText - searchText - searchText - searchText')
        this.searchSubject.next(this.searchText);
    }

    _handleFilterByClick(section = "dropdown") {
        if (section === "dropdown") {
            this.displayDropdown = !this.displayDropdown;
        } else {
            console.log(section, 'sectionsectionsectionsection')
            this.filterBy = _.find(this.filterByOptions, { query: section }) || this.filterBy;
            this.displayDropdown = false;
        }
    }
}