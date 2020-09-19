import { Component, OnInit } from "@angular/core";
import { DriverDetailsComponent } from "./../../../driver-details/components/driver-details/driver-details.component";
import { Observable } from "rxjs";
import { DriverService } from "./../../../../core/services/driver.service";
import { Driver } from "./../../../../core/driver";
import { Router } from "@angular/router";

@Component({
  selector: "app-driver-list",
  templateUrl: "./driver-list.component.html",
  styleUrls: ["./driver-list.component.css"],
})
export class DriverListComponent implements OnInit {
  drivers: Observable<Driver[]>;
  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.drivers = this.driverService.getDriversList();
  }

  deleteDriver(id: number) {
    this.driverService.deleteDriver(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  driverDetails(id: number) {
    this.router.navigate(["details", id]);
  }
}
