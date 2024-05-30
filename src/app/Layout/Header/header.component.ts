import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputModules } from '../../inputs/inputs.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InputModules, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  _onLoginClick(events: any) {

  }

}
