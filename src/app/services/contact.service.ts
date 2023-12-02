import { Injectable, signal } from '@angular/core';

export interface IContact {
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  addContact(contacts: IContact[], contact: IContact) {
    const index = contacts.indexOf(contact);
    if (index === -1) contacts.push(contact);
    return contacts;
  }

  removeContact(contacts: IContact[], contact: IContact) {
    const index = contacts.indexOf(contact);

    if (index !== -1) contacts.splice(index, 1);
    return contacts;
  }

  initContacts() {
    return [
      { firstName: 'Mollee', lastName: 'Nizard', phoneNumber: '517 544 5045' },
      { firstName: 'Maddie', lastName: 'Edeler', phoneNumber: '276 346 1960' },
      { firstName: 'Mile', lastName: 'Bough', phoneNumber: '374 708 0517' },
      {
        firstName: 'Johnathan',
        lastName: 'Ponte',
        phoneNumber: '446 295 5841',
      },
      { firstName: 'Loreen', lastName: 'Noen', phoneNumber: '789 265 3947' },
      {
        firstName: 'Hayes',
        lastName: 'Bourgeois',
        phoneNumber: '330 322 7335',
      },
      { firstName: 'Dylan', lastName: 'Worsley', phoneNumber: '577 610 3280' },
      {
        firstName: 'Franciskus',
        lastName: 'Pettersen',
        phoneNumber: '203 255 9833',
      },
      { firstName: 'Adela', lastName: 'Prebble', phoneNumber: '323 125 3541' },
      { firstName: 'Roddy', lastName: 'Larose', phoneNumber: '855 895 5101' },
    ];
  }
}
