import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverDetailsRoutingModule } from './driver-details-routing.module';
import { DriverDetailsComponent } from './components/driver-details/driver-details.component';


@NgModule({
  declarations: [DriverDetailsComponent],
  imports: [
    CommonModule,
    DriverDetailsRoutingModule
  ]
})
export class DriverDetailsModule { }
