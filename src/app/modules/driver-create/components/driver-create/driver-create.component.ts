import { DriverService } from "../../../../core/services/driver.service";
import { Driver } from "../../../../core/driver";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-driver-create",
  templateUrl: "../driver-create/driver-create.component.html",
  styleUrls: ["./driver-create.component.css"],
})
export class DriverCreateComponent implements OnInit {
  driver: Driver = new Driver();
  submitted = false;

  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit(): void {}

  newDriver(): void {
    this.submitted = false;
    this.driver = new Driver();
  }

  save() {
    this.driverService.createDriver(this.driver).subscribe(
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
    this.save();
  }

  gotoList() {
    this.router.navigate(["/drivers"]);
  }
}

/*

export class CreateEmployeeComponent implements OnInit {
  

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/employees"]);
  }
}*/
