import { Component, OnInit, TemplateRef, ViewChild, inject } from "@angular/core";
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
import { MaterialUIModule } from "../../MaterialModel/material-ui.module";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { NgxPaginationModule, PaginationInstance } from "ngx-pagination";


@Component({
    selector: "app-userDetail",
    standalone: true,
    imports: [InputModules, CommonModule, LucideAngularModule, FormsModule, MaterialUIModule, NgxPaginationModule],
    templateUrl: './userListing.component.html',
    styleUrl: './userListing.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class UserListingComponent implements OnInit {
    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, private toaster: ToastrService) { };

    private searchSubject = new Subject<string>();
    private readonly debounceTimeMs = 500; // Set the debounce time (in milliseconds)
    readonly dialog = inject(MatDialog);

    @ViewChild("myTemplate") template!: TemplateRef<any>;

    usersData: ICustomerData[] = [];
    searchText: string = "";
    displayDropdown: boolean = false;
    filterBy: { name: string, query: string } = { name: 'Search By', query: 'all' };
    deleteUser!: ICustomerData;
    public config: PaginationInstance = {
        id: 'listing_section',
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: 10
    };
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
            this.config.currentPage = 1;
            this._getCustomerData(searchValue, 1);
        });
    }

    _getCustomerData(searchValue?: string | null, page?: number) {
        let URL = `/api/customers?limit=6&page=${page || this.config.currentPage}`;
        if (searchValue) {
            // URL = `${URL}&${this.filterBy?.query}=${this.searchText}`
            URL = `${URL}&search=${this.searchText}`
        }
        this.api.get(URL)
            .then((res) => {
                if (res?.status === 'ok') {
                    this.usersData = res?.data;
                    this.config = { ...this.config, totalItems: res?.totalCount };

                }
            }).catch((err) => {
                console.log(err, 'ddddddddddddddddddddddddddddd')
            })
    }

    _handleRedirect(action: string, user: ICustomerData) {
        if (action !== "delete") {
            this.router.navigateByUrl(`/${action}/${user?._id}`)
        } else {
            this.deleteUser = user;
            this.openDialog()
        }
    }

    _handelSearch(data: string) {
        this.searchSubject.next(data);
    }

    _handelDeleteUser() {
        this.api.delete(`/api/customers/${this.deleteUser?._id}`).then((response) => {
            console.log('deleted', response)
            if (response.status === 'ok') {
                this.dialog.closeAll();
                this.toaster.success('deleted successfully');
            } else {
                alert(response?.message)
            }
        }).catch((error) => {
            console.log('error', error)
        })
    }

    _handleFilterByClick(section = "dropdown") {
        if (section === "dropdown") {
            this.displayDropdown = !this.displayDropdown;
        } else {
            this.filterBy = _.find(this.filterByOptions, { query: section }) || this.filterBy;
            this.displayDropdown = false;
        }
    }

    _handlePageChange(data: any) {
        console.log('totalCount', data, 'uuuuuuuuuuuuuuuu')
        this.config = { ...this.config, currentPage: data };
        this._getCustomerData(this.searchText, data)
    }

    // dialog open
    openDialog(): void {
        const dialogRef = this.dialog.open(this.template, {
            width: '550px',
            panelClass: 'delete-modal',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this._getCustomerData()
            if (result !== undefined) {
                alert('hello');
            }
        });
    }
}