import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-booking-pop-up',
  templateUrl: './booking-pop-up.component.html',
  styleUrls: ['./booking-pop-up.component.css']
})
export class BookingPopUpComponent implements OnInit {
details:any=[];
  constructor(@Inject(MAT_DIALOG_DATA) public item:any,public dialog:MatDialog) {
  

   }
   onPay(){
     alert("You have booked Flight Successfully");
   }
  //  onCancel(){
  //     this.dialog.closeAll();

  //  }

  ngOnInit(): void {
    console.log(this.item);
  }

}
