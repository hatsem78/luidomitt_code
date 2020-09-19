import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverCreateRoutingModule } from './driver-create-routing.module';
import { DriverCreateComponent } from './components/driver-create/driver-create.component';


@NgModule({
  declarations: [DriverCreateComponent],
  imports: [
    CommonModule,
    DriverCreateRoutingModule
  ]
})
export class DriverCreateModule { }
