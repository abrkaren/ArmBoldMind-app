import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  guestListForm: FormGroup;

  side = [];

  guests;

  storageData;

  constructor( private dataService: DataService,
               private fb: FormBuilder ) { }

  ngOnInit() {
    if(localStorage.getItem('guestListForm')){
      this.storageData = JSON.parse(localStorage.getItem('guestListForm'))
    }
    this.side = this.dataService.side;
    this.formControlsGuestListForm();
    this.getGuests();
  }

  addToList () {
    this.dataService.createGuest(this.guestListForm.value).subscribe(data => {
      // console.log(data)
      this.getGuests();
    })
  }

  getGuests() {
    this.dataService.getGuests().subscribe(data => {
        this.guests = data;
      })
  }

  // ---- step 3 start ---- \\
  formControlsGuestListForm() {
    this.guestListForm = this.fb.group({
      guestFirstName: [this.storageData ? this.storageData.guestFirstName : null],
      guestMiddleName: [this.storageData ? this.storageData.guestMiddleName : null],
      guestLastName: [this.storageData ? this.storageData.guestLastName : null],
      guestPhoneNumber: [this.storageData ? this.storageData.guestPhoneNumber : null],
      guestEmail: [this.storageData ? this.storageData.guestEmail : null, [Validators.email]],
      guestSide: [this.storageData ? this.storageData.guestSide : null]
    })
  }
  submitGuestListForm() {
    localStorage.setItem('guestListForm', JSON.stringify(this.guestListForm.value));
    localStorage.setItem('step3-completed', 'step3-completed');

    // do something
    setTimeout(()=> {
      this.onClick.emit('step3-completed')
    }, 200)
  }
  cancelGuestListForm() {
    localStorage.removeItem('step2-completed');

    // do something
    setTimeout(()=> {
      this.onCancel.emit('step3-canceled')
    }, 200)
  }
  // ---- step 3 end ---- \\

}
