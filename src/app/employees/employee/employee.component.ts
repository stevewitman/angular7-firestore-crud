import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

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
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    };
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    this.firestore.collection('employees').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Emp Register');
  }

}
