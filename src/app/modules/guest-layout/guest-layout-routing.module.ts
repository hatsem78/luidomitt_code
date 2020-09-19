import { DriverListModule } from "./../driver-list/driver-list.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuestLayoutComponent } from "./components/guest-layout/guest-layout.component";
import { DriverListComponent } from "../driver-list/components/driver-list/driver-list.component";
import { DriverCreateComponent } from "../driver-create/components/driver-create/driver-create.component";
import { DriverUpdateComponent } from "../driver-update/components/driver-update/driver-update.component";
import { DriverDetailsComponent } from "../driver-details/components/driver-details/driver-details.component";

const routes: Routes = [
  {
    path: "",
    component: GuestLayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: "drivers", // child route path
        component: DriverListComponent, // child route component that the router renders
      },
      {
        path: "add",
        component: DriverCreateComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestLayoutRoutingModule {}
