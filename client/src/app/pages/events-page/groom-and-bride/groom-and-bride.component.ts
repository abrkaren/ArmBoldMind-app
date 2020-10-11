import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: 'app-groom-and-bride',
  templateUrl: './groom-and-bride.component.html',
  styleUrls: ['./groom-and-bride.component.scss']
})
export class GroomAndBrideComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  groomAndBrideForm: FormGroup;

  gender = [];

  storageData;

  constructor( private dataService: DataService,
               private fb: FormBuilder ) { }

  ngOnInit() {
    if(localStorage.getItem('groomAndBrideForm')){
      this.storageData = JSON.parse(localStorage.getItem('groomAndBrideForm'))
    }
    this.gender = this.dataService.gender;
    this.formControlsGroomAndBrideForm();
  }

  // ---- step 1 start ---- \\
  formControlsGroomAndBrideForm() {
    this.groomAndBrideForm = this.fb.group({
      email: [this.storageData ? this.storageData.email : null, [Validators.email]],
      weddingName: [this.storageData ? this.storageData.weddingName : null],
      groomFirstName: [this.storageData ? this.storageData.groomFirstName : null],
      groomMiddleName: [this.storageData ? this.storageData.groomMiddleName : null],
      groomLastName: [this.storageData ? this.storageData.groomLastName : null],
      groomDateOfBirth: [this.storageData ? this.storageData.groomDateOfBirth : null],
      groomPhoneNumber: [this.storageData ? this.storageData.groomPhoneNumber : null],
      groomGender: [this.storageData ? this.storageData.groomGender : null],
      brideFirstName: [this.storageData ? this.storageData.brideFirstName : null],
      brideMiddleName: [this.storageData ? this.storageData.brideMiddleName : null],
      brideLastName: [this.storageData ? this.storageData.brideLastName : null],
      brideDateOfBirth: [this.storageData ? this.storageData.brideDateOfBirth : null],
      bridePhoneNumber: [this.storageData ? this.storageData.bridePhoneNumber : null],
      brideGender: [this.storageData ? this.storageData.brideGender : null]
    })
  }
  submitGroomAndBrideForm() {
    localStorage.setItem('groomAndBrideForm', JSON.stringify(this.groomAndBrideForm.value));
    localStorage.setItem('step1-completed', 'step1-completed');

    // do something
    setTimeout(()=> {
      this.onClick.emit('step1-completed')
    }, 200)
  }
  // ---- step 1 end ---- \\

}
