import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @ViewChild('formSubmit') submitForm: NgForm;

  editMode = false;
  updatedIndex = 0;

  companyDataForm = {
    name: '',
    reference: ''
  };

  private mockData: any[];
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(data => this.mockData = data);
  }

  onSubmit() {
    console.log(this.submitForm);
    if (this.editMode) {
      this.mockData[this.updatedIndex] = this.submitForm.value.companyData;
    } else {
      this.mockData.push(this.submitForm.value.companyData);
    }
  }

  onDelete(index: number) {
    this.mockData.splice(index, 1);
  }

  onEdit(index: number) {
    this.editMode = true;
    this.companyDataForm = Object.assign({}, this.mockData[index]);
    this.updatedIndex = index;
  }

  onCancel() {
    this.editMode = false;
  }
}
