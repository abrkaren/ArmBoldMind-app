import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { HttpClient } from "@angular/common/http";

import { Guest } from '../interfaces'
import { Event } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  createGuest(data): Observable<Guest> {
    return this.http.post<Guest>('/api/guest', data)
  }

  getGuests(): Observable<Guest> {
    return this.http.get<Guest>('/api/guest')
  }

  createEvent(data): Observable<Event> {
    return this.http.post<Event>('/api/event', data)
  }

  getEvents(): Observable<Event> {
    return this.http.get<Event>('/api/event')
  }

  gender = [
    {
      label: 'Male',
      value: 'Male'
    },
    {
      label: 'Female',
      value: 'Female'
    }
  ];

  ceremonyTypes = [
    {
      label: 'type 1',
      value: 'type 1'
    },
    {
      label: 'type 2',
      value: 'type 2'
    }
  ];

  hotels = [
    {
      label: 'Radisson Blu',
      value: 'Radisson Blu'
    },
    {
      label: 'Marriott Armenia',
      value: 'Marriott Armenia'
    }
  ];

  side = [
    {
      label: 'side 1',
      value: 'side 1'
    },
    {
      label: 'side 2',
      value: 'side 2'
    }
  ];

  vendors = [
    {
      imageSrc: 'https://via.placeholder.com/110',
      title: 'Unique Spa Salon and pool',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      count: '12',
      type: 'services'
    },
    {
      imageSrc: 'https://via.placeholder.com/110',
      title: 'Flowerry',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      count: '9',
      type: 'services'
    }
  ]
  
}
