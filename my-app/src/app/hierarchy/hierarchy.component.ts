import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {
  @ViewChild('formSubmit') submitForm: NgForm;

  editMode = false;
  updatedIndex = 0;

  dataInputForm = {
    productId: '',
    productName: ''
  };

  mockData = [
    {
      productId: 'P-001',
      productName: 'Product 01'
    },
    {
      productId: 'P-002',
      productName: 'Product 02'
    },
    {
      productId: 'P-003',
      productName: 'Product 03'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.submitForm);
    if (this.editMode) {
      this.mockData[this.updatedIndex] = this.submitForm.value.productData;
    } else {
      this.mockData.push(this.submitForm.value.productData);
    }
  }

  onDelete(index: number) {
    this.mockData.splice(index, 1);
  }

  onEdit(index: number) {
    this.editMode = true;
    this.dataInputForm = Object.assign({}, this.mockData[index]);
    this.updatedIndex = index;
  }

  onCancel() {
    this.editMode = false;
  }

}
