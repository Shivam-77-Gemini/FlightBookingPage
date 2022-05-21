import { Component, OnInit } from '@angular/core';
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
  constructor(private bookingServices:BookingServiceService) {
  this.flightDetail=this.bookingServices.getALlFlighDetails();
  this.secondFlightDetails=this.bookingServices.getALlFlighDetails();
  // this.flightDetail=this.flightDetail.sort((first:any,second:any)=>first.flightPrice-second.flightPrice);

   }
  //  c:any=0;
  //  isAscendingSort: Boolean = true;
  //  sortPrice() {
  //      console.log('sorting!'); //just to check if sorting is beng called
  //      this.flightDetail.sort((item1: any, item2: any) => this.compare(item1, item2));
  //    }
  //    // Sort
  //    compare(item1: any, item2: any): number {
  //      let compValue = 0;
  //        compValue = item1.attributes.fullName.localeCompare(item2.attributes.fullName, 'en', {
  //          sensitivity: 'base'
  //        });
  //      console.log(compValue);
  //      if (!this.isAscendingSort) {
  //        compValue = compValue * -1;
  //      }
  //      return compValue;
  //    }
   price:any=0;
   duration:any=0;
 onPrice(){
  if(this.price==0){
    this.price++;
     this.flightDetail=this.flightDetail.sort((first:any,second:any)=>first.flightPrice-second.flightPrice);
  }
  else if(this.price==1){
    this.flightDetail=this.flightDetail.sort((first:any,second:any)=>second.flightPrice-first.flightPrice);
  
  }
  else{
    this.flightDetail=this.secondFlightDetails;
  }
}
onDuration(){
  if(this.duration==0){
    this.duration++;
     this.flightDetail=this.flightDetail.sort((first:any,second:any)=>first.flightDuration-second.flightDuration);
  }
  else if(this.duration==1){
    this.flightDetail=this.flightDetail.sort((first:any,second:any)=>second.flightDuration-first.flightDuration);
  
  }
  else{
    this.flightDetail=this.secondFlightDetails;
  }
  
}
  ngOnInit(): void {
  }

}
