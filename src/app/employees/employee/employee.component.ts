import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit() {
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    };
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    cn
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    };

  }

}
