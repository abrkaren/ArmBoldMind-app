import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-created',
  templateUrl: './event-created.component.html',
  styleUrls: ['./event-created.component.scss']
})
export class EventCreatedComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    setTimeout(()=> {
      this.onClick.emit('Event created')
    }, 200)
  }

}
