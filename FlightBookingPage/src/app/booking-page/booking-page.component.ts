import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  flightDetail:any=[];
  constructor(private bookingServices:BookingServiceService) {
  this.flightDetail=this.bookingServices.getALlFlighDetails();
   }

  ngOnInit(): void {
  }

}
