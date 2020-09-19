import { Component, OnInit } from "@angular/core";
import { Driver } from "../../../../core/driver";
import { DriverService } from "../../../../core/services/driver.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-driver-update",
  templateUrl: "../driver-update/driver-update.component.html",
  styleUrls: ["../../components/driver-update/driver-update.component.css"],
})
export class DriverUpdateComponent implements OnInit {
  id: number;
  driver: Driver;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: DriverService
  ) {}

  ngOnInit() {
    this.driver = new Driver();

    this.id = this.route.snapshot.params["id"];

    this.employeeService.getDriver(this.id).subscribe(
      (data) => {
        console.log(data);
        this.driver = data;
      },
      (error) => console.log(error)
    );
  }

  updateEmployee() {
    this.employeeService.updateDriver(this.id, this.driver).subscribe(
      (data) => {
        console.log(data);
        this.driver = new Driver();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(["/drivers"]);
  }
}
