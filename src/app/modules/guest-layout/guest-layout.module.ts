import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuestLayoutRoutingModule } from "./guest-layout-routing.module";
import { GuestLayoutComponent } from "./components/guest-layout/guest-layout.component";
import { FormsModule } from "@angular/forms";
import { DriverCreateComponent } from "../driver-create/components/driver-create/driver-create.component";
import { DriverUpdateComponent } from "../driver-update/components/driver-update/driver-update.component";
@NgModule({
  declarations: [
    GuestLayoutComponent,
    DriverCreateComponent,
    DriverUpdateComponent,
    DriverCreateComponent,
  ],
  imports: [CommonModule, GuestLayoutRoutingModule, FormsModule],
})
export class GuestLayoutModule {}
