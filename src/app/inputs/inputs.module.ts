import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialUIModule } from "../MaterialModel/material-ui.module";
import { TextFieldComponent } from "./Textfield/Textfield.component";
import { DatePickerComponent } from "./datepickerInput/datepicker.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { CardComponent } from "./card/card.component";
import { NgxPaginationModule } from "ngx-pagination";
import { PaginationComponent } from "./paginationComp/paginationComp.component";

@NgModule({
    declarations: [
        ButtonComponent,
        TextFieldComponent,
        DatePickerComponent,
        CardComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        MaterialUIModule,
        RouterModule,
        FormsModule,
        NgbDatepickerModule,
        NgxPaginationModule
    ],
    exports: [
        ButtonComponent,
        TextFieldComponent,
        DatePickerComponent,
        CardComponent,
        PaginationComponent
    ]
})

export class InputModules { };