import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";

@Component({
    selector: "app-miniCart",
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: "./minicart.component.html",
    styleUrl: './minicart.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class MiniCartComponent {

    open: boolean = false;
}