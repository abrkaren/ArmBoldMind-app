import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  vendors;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.vendors = this.dataService.vendors;
  }

  cancelVendors() {
    localStorage.removeItem('step3-completed');

    // do something
    setTimeout(()=> {
      this.onCancel.emit('step4-canceled')
    }, 200)
  }

  createEvent() {

    let groomAndBrideForm = JSON.parse(localStorage.getItem('groomAndBrideForm'));
    let eventDescriptionForm = JSON.parse(localStorage.getItem('eventDescriptionForm'));
    let guestListForm = JSON.parse(localStorage.getItem('guestListForm'));

    let object = {
      email: groomAndBrideForm.email,
      weddingName: groomAndBrideForm.weddingName,
      groomFirstName: groomAndBrideForm.groomFirstName,
      groomMiddleName: groomAndBrideForm.groomMiddleName,
      groomLastName: groomAndBrideForm.groomLastName,
      groomDateOfBirth: groomAndBrideForm.groomDateOfBirth,
      groomPhoneNumber: groomAndBrideForm.groomPhoneNumber,
      groomGender: groomAndBrideForm.groomGender,
      brideFirstName: groomAndBrideForm.brideFirstName,
      brideMiddleName: groomAndBrideForm.brideMiddleName,
      brideLastName: groomAndBrideForm.brideLastName,
      brideDateOfBirth: groomAndBrideForm.brideDateOfBirth,
      bridePhoneNumber: groomAndBrideForm.bridePhoneNumber,
      brideGender: groomAndBrideForm.brideGender,

      ceremonyType: eventDescriptionForm.ceremonyType,
      hotel: eventDescriptionForm.hotel,
      checkInDate: eventDescriptionForm.checkInDate,
      checkOutDate: eventDescriptionForm.checkOutDate,
      honeymoon: eventDescriptionForm.honeymoon,
      bookedRoom: eventDescriptionForm.bookedRoom,
      roomNumber: eventDescriptionForm.roomNumber,

      guestFirstName: guestListForm.guestFirstName,
      guestMiddleName: guestListForm.guestMiddleName,
      guestLastName: guestListForm.guestLastName,
      guestPhoneNumber: guestListForm.guestPhoneNumber,
      guestEmail: guestListForm.guestEmail,
      guestSide: guestListForm.guestSide
    };

    this.dataService.createEvent(object).subscribe(data => {
      // console.log(data)
      setTimeout(()=> {
        this.onClick.emit('Event created!!!')
      }, 200)
    })
  }

}
