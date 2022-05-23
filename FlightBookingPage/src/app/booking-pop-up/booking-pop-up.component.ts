import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { title } from 'process';
import Swal from 'sweetalert2';
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
    Swal.fire({
      
      icon: 'success',
      title: 'You booked Successfully!',
      showConfirmButton: false,
      timer: 1500
    })
    
    
   }
   onCancel(){
     alert('You have cancelled your booking!');
   }
  
 

  ngOnInit(): void {
    
  }

}

