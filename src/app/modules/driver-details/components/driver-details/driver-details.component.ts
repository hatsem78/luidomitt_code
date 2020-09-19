import { DriverService } from "./../../../../core/services/driver.service";
import { Driver } from "./../../../../core/driver";
import { Component, OnInit } from "@angular/core";
import { DriverListComponent } from "../../../driver-list/components/driver-list/driver-list.component";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-driver-details",
  templateUrl: "../driver-details/driver-details.component.html",
  styleUrls: ["../driver-details/driver-details.component.html"],
})
export class DriverDetailsComponent implements OnInit {
  id: number;
  driver: Driver;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private driverService: DriverService
  ) {}

  ngOnInit() {
    this.driver = new Driver();

    this.id = this.route.snapshot.params["id"];

    this.driverService.getDriver(this.id).subscribe(
      (data) => {
        console.log(data);
        this.driver = data;
      },
      (error) => console.log(error)
    );
  }
  list() {
    this.router.navigate(["drivers"]);
  }
}
