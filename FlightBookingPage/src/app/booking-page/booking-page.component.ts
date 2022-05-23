import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingPopUpComponent } from '../booking-pop-up/booking-pop-up.component';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  flightDetail:any=[];
  secondFlightDetails:any=[];
  // compare: any;
  constructor(private bookingServices:BookingServiceService,private dialog:MatDialog) {
  this.flightDetail=this.bookingServices.getALlFlighDetails();
  this.secondFlightDetails=this.bookingServices.getALlFlighDetails();
  // this.flightDetail=this.flightDetail.sort((first:any,second:any)=>first.flightPrice-second.flightPrice);

   }
  
   price:any=0;
   duration:any=0;

onBook(item:any){
this.dialog.open(BookingPopUpComponent,{data:item});
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












// onDuration(){
//   // this.flightDetail.sort((first:any,second:any)=>(new Intl.Collator().compare(first.flightPrice,second.flightPrice)));
//   // if(this.duration==0){
//   //   this.duration++;
//   //   //  this.flightDetail=this.flightDetail.sort((first:any,second:any)=>(first.departureTime-second.departureTime)?1:0);
//   // }
//   // else if(this.duration==1){
//   //   this.flightDetail=this.flightDetail.sort((first:any,second:any)=>(second.departureTime-first.departureTime)?1:((first.departureTime-second.departureTime)?-1:0));
  
//   // }
//   // else{
//   //   this.flightDetail=this.secondFlightDetails;
//   // }
  
// }
// objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
  ngOnInit(): void {
  }

}
