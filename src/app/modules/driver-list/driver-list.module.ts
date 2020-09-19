import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DriverListRoutingModule } from "./driver-list-routing.module";
import { DriverListComponent } from "./components/driver-list/driver-list.component";

@NgModule({
  declarations: [DriverListComponent],
  imports: [CommonModule, DriverListRoutingModule],
})
export class DriverListModule {}
