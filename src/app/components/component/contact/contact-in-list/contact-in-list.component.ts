import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContact } from '../../../../services/contact.service';

@Component({
  selector: 'app-contact-in-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-in-list.component.html',
  styleUrl: './contact-in-list.component.scss',
})
export class ContactInListComponent {
  @Input({ required: true }) contact: IContact | null = null;
  @Output() deleteEmitter = new EventEmitter<IContact>();

  delete() {
    if (this.contact === null) return;
    this.deleteEmitter.emit(this.contact);
  }
}
