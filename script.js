
class employeeDetails {
constructor(name,age,department,tenure)
{
  this.name = name;
  this.age = age;
  this.department = department;
  this.tenure = tenure;
}
 get myEmployeeDetails() {
 return `Employee name is ${this.name} and age ${this.age} works in ${this.department} for ${this.tenure} years`;
}
}
const employee = new employeeDetails('John','30','IT','10');
console.log(this);
console.log(employee.name);
console.log(employee.age);
console.log(employee.department);
console.log(employee.tenure);
console.log(employee.myEmployeeDetails);
//employee.myEmployeeDetails();


function a()
{
    "use strict";
    console.log("Inside a",this);
}
function b(a){
    console.log("Inside b",this);
    return a;
}

const c = b(a);
c();