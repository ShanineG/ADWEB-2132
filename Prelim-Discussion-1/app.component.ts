import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-data';
  appName = 'This is one-way data binding example';
  
  header1 = 'Number Interpolation';

  // numeric binding
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Shanine";

  //style binding
  appliedCSSClass = "green";
  notappliedCSSClass = true;
  myColor = 'red';

  //Two-way data binding

  showData($event:any){
    console.log("Button is Clicked!");

  }

  //Functiond and using alert
  getMessage(msg:any)
  {
    alert(msg)
  }

  //Cosole warning
  getMessage2(msg2:any)
  {
    console.warn(msg2)
  }

  //Keyup Function or Console warning
  getData(data:any){
    console.warn(data)
  }

  //Two-way data bindning
  studName=""
  studSubj=""
  prelim=0
  midterm=0
  final=0
  average = (this.prelim + this.midterm + this.final)/3

  isLogIn : boolean = false;
  isLogOut : boolean = true;

  list = [1,2,3,4,5];

  studentArr: any[]=[
    {"id":1,
    "name":"student1"
    },
    {"id":2,
    "name":"student2"
    },
    {"id":3,
    "name":"student3"
    },
    {"id":4,
    "name":"student4"
    }
  ];
  trackByData(index:number, studentArr:any): number
  {
    return studentArr.id;
  }

  // another ngFor example
  users = [
    { firstName: 'Shanine', lastName: 'Guinto', email: 'shanienguinto30@gmail.com', role: 'Admin'}

  ];

  
  logInName = 'admin';


}
