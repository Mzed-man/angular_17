import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../../component/container/page-container/page-container.component';
import { ContactService, IContact } from '../../../services/contact.service';
import { ContactInListComponent } from '../../component/contact/contact-in-list/contact-in-list.component';
import { ContactCreateComponent } from '../../component/contact/contact-create/contact-create.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    PageContainerComponent,
    ContactInListComponent,
    ContactCreateComponent,
  ],
})
export class HomeComponent implements OnInit {
  private contactService = inject(ContactService);
  contacts = signal<IContact[]>([]);

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts.update(() => [...this.contactService.initContacts()]);
  }

  delete(contact: IContact) {
    this.contacts.update((currentContacts) => [
      ...this.contactService.removeContact(currentContacts, contact),
    ]);
  }
}
