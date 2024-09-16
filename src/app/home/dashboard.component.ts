import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';
import { Icons } from '../Common/Icons';
import { CommonModule } from '@angular/common';
import { InputModules } from '../inputs/inputs.module';
import _ from 'lodash';
import { DetailPageComponent } from "../Pages/Users/detail-page/detail-page.component";
import { UserListingComponent } from "../Pages/Users/userListing/userListing.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, InputModules, LucideAngularModule, DetailPageComponent, UserListingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
  ]
})
export class DashboardComponent {

  ComponentMap = {
    "OverView": `<h1>Hello</h1>`
  }
  activeOption: string = "Customers";

  menuSections: any = {
    generalData: {
      title: "General",
      options: [
        { icon: "square-kanban", label: "Customers", component: this.ComponentMap['OverView'] },
        { icon: "settings", label: "Settings", component: this.ComponentMap['OverView'] }
      ]
    },
    mainMenuData: {
      title: "Main Menu",
      options: [
        { icon: "files", label: "All files", component: this.ComponentMap['OverView'] },
        { icon: "clock", label: "Recent", component: this.ComponentMap['OverView'] },
        { icon: "file-text", label: "Docs", component: this.ComponentMap['OverView'] },
        { icon: "image", label: "Photos", component: this.ComponentMap['OverView'] },
        { icon: "trash", label: "Trash", component: this.ComponentMap['OverView'] },
      ]
    }
  }


  getMenuItems(): string[] {
    return _.keys(this.menuSections);
  }

  handleActiveClass(option: string) {
    this.activeOption = option;
  }

}
