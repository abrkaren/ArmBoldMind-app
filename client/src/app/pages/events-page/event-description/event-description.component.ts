import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  eventDescriptionForm: FormGroup;

  ceremonyTypes = [];
  hotels = [];

  storageData;

  constructor( private dataService: DataService,
               private fb: FormBuilder ) { }

  ngOnInit() {
    if(localStorage.getItem('eventDescriptionForm')){
      this.storageData = JSON.parse(localStorage.getItem('eventDescriptionForm'))
    }
    this.ceremonyTypes = this.dataService.ceremonyTypes;
    this.hotels = this.dataService.hotels;
    this.formControlsEventDescriptionForm();
  }

  // ---- step 2 start ---- \\
  formControlsEventDescriptionForm(){
    this.eventDescriptionForm = this.fb.group({
      ceremonyType: [this.storageData ? this.storageData.ceremonyType : null, [Validators.required]],
      hotel: [this.storageData ? this.storageData.hotel : null, [Validators.required]],
      checkInDate: [this.storageData ? this.storageData.checkInDate : null, [Validators.required]],
      checkOutDate: [this.storageData ? this.storageData.checkOutDate : null, [Validators.required]],
      honeymoon: [this.storageData ? this.storageData.honeymoon : null],
      bookedRoom: [this.storageData ? this.storageData.bookedRoom : null],
      roomNumber: [this.storageData ? this.storageData.roomNumber : null, [Validators.required]]
    })
  }
  submitEventDescriptionForm() {
    localStorage.setItem('eventDescriptionForm', JSON.stringify(this.eventDescriptionForm.value));
    localStorage.setItem('step2-completed', 'step2-completed');

    // do something
    setTimeout(()=> {
      this.onClick.emit('step2-completed')
    }, 200)
  }
  cancelEventDescriptionForm() {
    localStorage.removeItem('step1-completed');

    // do something
    setTimeout(()=> {
      this.onCancel.emit('step2-canceled')
    }, 200)
  }
  // ---- step 2 end ---- \\

}
