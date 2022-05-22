import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingPopUpComponent } from './booking-pop-up/booking-pop-up.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [{path:'',redirectTo:'/login',pathMatch:'full'},

{path:'login',redirectTo:'/boookingpage',pathMatch:'full'},
{path:'login',component:LoginFormComponent},
{path:'boookingpage',component:BookingPageComponent},
{path:'popup',component:BookingPopUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
