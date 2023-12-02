import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService, IContact } from '../../../../services/contact.service';

@Component({
  selector: 'app-contact-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-create.component.html',
  styleUrl: './contact-create.component.scss',
})
export class ContactCreateComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);

  contactForm: FormGroup | null = null;

  @Input({ required: true }) contacts: IContact[] = [];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: ['', [Validators.required]],
    });
  }

  saveContact() {
    if (this.contactForm === null || this.contactForm.invalid) return;
    const contact: IContact = this.buildFromForm();
    if (this.contactForm.invalid) return;

    this.contactService.addContact(this.contacts, contact);
    this.contactForm.reset();
  }

  private buildFromForm(): IContact {
    return {
      firstName: this.getFirstName.value,
      lastName: this.getLastName.value,
      phoneNumber: this.getPhoneNumber.value,
    };
  }

  get getFirstName() {
    return this.contactForm!.get('firstName') as FormControl;
  }

  get getLastName() {
    return this.contactForm!.get('lastName') as FormControl;
  }

  get getPhoneNumber() {
    return this.contactForm!.get('phoneNumber') as FormControl;
  }
}
