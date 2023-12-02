import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../navigation/header/header.component";
import {FooterComponent} from "../../navigation/footer/footer.component";

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.scss'
})
export class PageContainerComponent {

}
