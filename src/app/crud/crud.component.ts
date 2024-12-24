import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  newEmployeeClicked = false;
  employees = [
    { name: 'Ashish', position: 'Developer' },
    { name: 'TestyCodeiz', position: 'Youtuber' },
    { name: 'Ashu', position: 'Designer' }
  ];
  color: any;
  model: any = {};
  model2: any = {};
  myValue: any;

  constructor() {}

  ngOnInit(): void {}

  addEmployee() {
    if (this.model.name && this.model.position) {
      this.employees.push(this.model);
      this.model = {};
    } else {
      console.error('Invalid data: Name or position is missing');
    }
  }

  deleteEmployee(index: number) {
    if (index > -1 && index < this.employees.length) {
      this.employees.splice(index, 1);
      console.log(`Deleted employee at index: ${index}`);
    } else {
      console.error('Invalid index');
    }
  }

  editEmployee(index: number) {
    if (index > -1 && index < this.employees.length) {
      this.model2 = { ...this.employees[index] }; // Shallow copy to avoid direct reference
      this.myValue = index;
    } else {
      console.error('Invalid index for editing');
    }
  }
  updateEmployee() {
    const index = this.myValue;
    if (index > -1 && index < this.employees.length) {
      this.employees[index] = { ...this.model2 };
      this.model2 = {};
    } else {
      console.error('Invalid index for updating');
    }
  }

  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  changeColorOne() {
    this.color = !this.color;
    if(this.color){
      return '#ffffff';
     }else{
      return '#f6f6f6';
    }
  }
}
