import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingPopUpComponent } from '../booking-pop-up/booking-pop-up.component';
import { BookingServiceService } from '../booking-service.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BookingPageComponent implements OnInit {
  flightDetail:any=[];
  secondFlightDetails:any=[];
  // compare: any;
  constructor(private bookingServices:BookingServiceService,public dialog:MatDialog) {
  this.flightDetail=this.bookingServices.getALlFlighDetails();
  this.secondFlightDetails=this.bookingServices.getALlFlighDetails();
  // this.flightDetail=this.flightDetail.sort((first:any,second:any)=>first.flightPrice-second.flightPrice);

   }
  
  //  price:any=0;
  //  duration:any=0;
  ngOnInit(): void {
  }

onBook(item:any){
this.dialog.open(BookingPopUpComponent, {data:item});

}
  
onPrice(){
 this.flightDetail=this.flightDetail.sort(function(first:any,second:any){
                  return first.flightPrice.localeCompare(second.flightPrice,undefined,{
                                                                    numeric:true,
                                                                    sensitivity:'base'
                                                                                    });
 });
}
 onDuration(){
  this.flightDetail=this.flightDetail.sort(function(first:any,second:any){
                return first.journeyTime.localeCompare(second.journeyTime,undefined,{
                                                                    numeric:true,
                                                                    sensitivity:'base'
                                                                                    });
  });
  
}
onDepartureTime(){
  this.flightDetail=this.flightDetail.sort(function(first:any,second:any){
    return first.departureTime.localeCompare(second.departureTime,undefined,{
                                                        numeric:true,
                                                        sensitivity:'base'
                                                                        });
});
    
}

onArrivalTime(){
  this.flightDetail=this.flightDetail.sort(function(first:any,second:any){
    return first.arrivalTime.localeCompare(second.arrivalTime,undefined,{
                                                        numeric:true,
                                                        sensitivity:'base'
                                                                        });
});
    
}

 

}
