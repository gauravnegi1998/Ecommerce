import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, OnChanges, Output, SimpleChange, SimpleChanges } from "@angular/core";
import { PaginationInstance } from "ngx-pagination";

@Component({
    selector: "app-paginationComp",
    standalone: false,
    templateUrl: './paginationComp.component.html',
    styleUrl: './paginationComp.component.scss',
})

export class PaginationComponent implements OnChanges {

    @Input() pageNumber: number = 1;
    @Input() totalPages: number = 10;
    @Input() config: PaginationInstance = { id: 'check', currentPage: 1, itemsPerPage: 20, totalItems: 20 };
    @Output() _onPageChange = new EventEmitter<any>();

    // public config: PaginationInstance = {
    //     itemsPerPage: 6,
    //     currentPage: 1,
    //     totalItems: 80
    // };
    log(val: any) { console.log(val, 'ttttttttttttttt'); }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes, '>>>>>>>>>>>>>>>>>>>>>>>>>>');
    }

    _onPaginateChange(data: any) {
        console.log(data, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        this._onPageChange.emit(data);
    }
}