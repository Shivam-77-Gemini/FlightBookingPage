import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
   
  constructor() { }
  getALlFlighDetails(){
    return [{
      "flightName":"Vistara",
      "flightPrice":"7,178",
      "departureTime":"17:45",
      "arrivalTime":"20:05",
      "journeyTime":"2h 20m",
      "costEmi":"2,076",
      "startPlace":"New Delhi, India",
      "startStation":"DEL",
      "destinationPlace":"Mumbai, India",
      "destinationStation":"BOM"
    },
    {
      "flightName":"Spicejet",
      "flightPrice":"3,776",
      "departureTime":"18:35",
      "arrivalTime":"20:50",
      "journeyTime":"1h 15m",
      "costEmi":"2,592",
      "startPlace":"New Delhi, India",
      "startStation":"DEL",
      "destinationPlace":"Mumbai, India",
      "destinationStation":"BOM"
    },
    {
      "flightName":"Spicejet",
      "flightPrice":"5,776",
      "departureTime":"19:45",
      "arrivalTime":"22:05",
      "journeyTime":"3h 20m",
      "costEmi":"2,592",
      "startPlace":"New Delhi, India",
      "startStation":"DEL",
      "destinationPlace":"Mumbai, India",
      "destinationStation":"BOM"
    }
  ]
  }
}
