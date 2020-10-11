import { Component, OnInit } from '@angular/core';

import { DataService } from "../../shared/services/data.service";

@Component({
  selector: 'app-list-events-page',
  templateUrl: './list-events-page.component.html',
  styleUrls: ['./list-events-page.component.scss']
})
export class ListEventsPageComponent implements OnInit {

  events;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.dataService.getEvents().subscribe(data => {
      this.events = data;
      // console.log(this.events)
    })
  }

}
