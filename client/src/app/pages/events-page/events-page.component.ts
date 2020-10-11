import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  eventCreated = false;

  constructor() { }

  ngOnInit(){
    if(localStorage.getItem('step1-completed')){
      this.step1 = false;
      this.step2 = true;
    }
    if(localStorage.getItem('step2-completed')){
      this.step2 = false;
      this.step3 = true;
    }
    if(localStorage.getItem('step3-completed')){
      this.step3 = false;
      this.step4 = true;
    }
  }

  // ---- Groom and bride emit Step 1 ---- \\
  submitGroomAndBrideForm(e) {
    // console.log('Groom and bride emit (Step 1 completed)....')

    this.step1 = false;
    this.step2 = true;
  }
  // ---- Groom and bride emit Step 1 ---- \\


  // ---- Event description emit Step 2 ---- \\
  submitEventDescriptionForm(e) {
    // console.log('Event description emit (Step 2 completed)....')

    this.step2 = false;
    this.step3 = true;
  }
  cancelEventDescriptionForm(e) {
    // console.log('Event description emit (Step 2 canceled) ....')

    this.step1 = true;
    this.step2 = false;
  }
  // ---- Event description emit Step 2 ---- \\

  // ---- Guest List emit Step 3 ---- \\
  submitGuestListForm(e) {
    // console.log('Guest List emit (Step 3 completed)....')

    this.step3 = false;
    this.step4 = true;
  }
  cancelGuestListForm(e) {
    // console.log('Guest List emit (Step 3 canceled) ....')

    this.step2 = true;
    this.step3 = false;
  }
  // ---- Guest List emit Step 3 ---- \\

  // ---- Vendors emit Step 4 ---- \\
  cancelVendors(e) {
    // console.log('Vendors emit (Step 4 canceled) ....')

    this.step3 = true;
    this.step4 = false;
  }
  createEvent(e) {
    // console.log('Event created!!!')

    this.step4 = false;
    this.eventCreated = true;
  }
  // ---- Vendors emit Step 4 ---- \\


  // ---- Close popup emit ---- \\
  closePopup(e) {
    // console.log('Close popup')

    this.step1 = true;
    this.eventCreated = false;
    localStorage.clear();
  }
  // ---- Close popup emit ---- \\
  
}
