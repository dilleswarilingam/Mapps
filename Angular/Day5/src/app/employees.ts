import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employeeservice {
  num:number=0;
  inc(){
    this.num++;
  }

  dec(){
    this.num--;
  }

  reset(){
    this.num=0;
  }

  employees = [
  { empRoll: 101, name: "John",      status: "Completed", disabled: false },
  { empRoll: 102, name: "David",     status: "Pending",   disabled: false },
  { empRoll: 103, name: "Mary",      status: "Rejected",  disabled: true },
  { empRoll: 104, name: "Alice",     status: "Completed", disabled: false },
  { empRoll: 105, name: "Robert",    status: "Pending",   disabled: false },
  { empRoll: 106, name: "Sophia",    status: "Completed", disabled: false },
  { empRoll: 107, name: "Michael",   status: "Rejected",  disabled: true },
  { empRoll: 108, name: "Emma",      status: "Pending",   disabled: false },
  { empRoll: 109, name: "William",   status: "Completed", disabled: false },
  { empRoll: 110, name: "Olivia",    status: "Rejected",  disabled: true },
  { empRoll: 111, name: "James",     status: "Pending",   disabled: false },
  { empRoll: 112, name: "Charlotte", status: "Completed", disabled: false },
  { empRoll: 113, name: "Daniel",    status: "Rejected",  disabled: true },
  { empRoll: 114, name: "Amelia",    status: "Completed", disabled: false },
  { empRoll: 115, name: "Benjamin",  status: "Pending",   disabled: false }
];
}
