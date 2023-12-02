import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInListComponent } from './contact-in-list.component';

describe('ContactInListComponent', () => {
  let component: ContactInListComponent;
  let fixture: ComponentFixture<ContactInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
