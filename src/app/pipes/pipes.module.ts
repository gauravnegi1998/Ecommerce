import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArrayLength } from "./array-length.pipe";

@NgModule({
    declarations: [ArrayLength],
    imports: [CommonModule],
    exports: [ArrayLength]
})

export class PipesModules { }