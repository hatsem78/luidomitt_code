import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DriverUpdateRoutingModule } from "./driver-update-routing.module";
import { DriverUpdateComponent } from "./components/driver-update/driver-update.component";

@NgModule({
  declarations: [DriverUpdateComponent],
  imports: [CommonModule, DriverUpdateRoutingModule],
})
export class DriverUpdateModule {}
