import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MiniCartComponent } from "../Pages/minicart/minicart.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, MiniCartComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  title = '';

  constructor() {

  }

  ngOnInit(): void {

  }
}
