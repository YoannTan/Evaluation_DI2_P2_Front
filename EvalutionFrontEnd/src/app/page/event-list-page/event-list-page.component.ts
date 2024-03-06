import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list-page.component.html',
  styleUrl: './event-list-page.component.scss'
})
export class EventListPageComponent {
  data: Object[] = [
    {
      "title": "Event1",
      "description": "this is an event",
      "date": "27-05-24",
      "hour": "9pm",
      "location": "paris"
    },
    {
      "title": "Event2",
      "description": "this is an event 2",
      "date": "27-05-24",
      "hour": "9pm",
      "location": "USA"
    },
    {
      "title": "Event3",
      "description": "this is an event 3",
      "date": "27-05-24",
      "hour": "9pm",
      "location": "dijon"
    },
    {
      "title": "Event4",
      "description": "this is an event 4",
      "date": "27-05-24",
      "hour": "9pm",
      "location": "tokyo"
    },
  ] 
  
  constructor() {
  }
  ngOnInit(): void {
    
  }
}
