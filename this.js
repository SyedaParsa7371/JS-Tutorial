"use strict";
console.log(this);
const obj ={
    a:10,
    x: function () {
        console.log(this.a);
    }
}

obj.x()

let student = {
    name: "Parsa",
    printName: function (){
        console.log(this.name);
    },
}

student.printName();

const student2 ={
    name: "Deepika",
};

student.printName.call(student2);
let car={
    brand:"mira",
    carcolor:"black"
}

let employee2={
    employeename:"sukaina",
    employeeorganization:"Meta Forlic Labs",
   

} 



let employee={
    employeename:"Parsa",
    employeeorganization:"Meta Forlic Labs",
    printEmployee: function(){
        // console.log(this.employeename);

         console.log("Your Employee name is "+this.employeename +" and the organization detail is " + this.employeeorganization+" have a car. The name of brand is "+car.brand+" and the color is"+car.carcolor)
    }

}
employee.printEmployee()

employee.printEmployee.call(car)
employee.printEmployee.call(employee2) 


const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  let name=persons.map(getFullName)
  console.log("")

