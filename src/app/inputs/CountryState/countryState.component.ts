import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import CountryStateService from "../../../services/countryState.service";
import * as _ from 'lodash';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-countryState',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './countryState.component.html',
    styleUrl: './countryState.component.scss'
})

export class CountryStateInputs implements OnInit {

    @Input() country: string = "";
    @Input() state: string = "";

    @Output() countryChange = new EventEmitter<string>();
    @Output() stateChange = new EventEmitter<string>();

    countryArray: { name: string, code: string }[] = [{ name: "", code: "" }];
    statesArray: string[] = [];

    constructor(private countryApi: CountryStateService) {
        this.countryArray = _.map(this.countryApi._getAllCountry(), (data) => ({ name: data?.name, code: data?.shortName }));
    }

    ngOnInit(): void {
        console.log(this.statesArray, 'this.countryArray')
    }

    _handleChangeSelect(code: string, section: string): void {
        console.log('dddddddddddddddddddd', section, code)
        if (section === "country") {
            this.statesArray = code ? this.countryApi._getStatesByCountry(code) : [];
            this.countryChange.emit(code);
        } else {
            this.stateChange.emit(code);
        }
    }
}