import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //Two way data binding
  studName=""
  studSubj=""
  prelim=0
  midterm=0
  final=0
  average = (this.prelim + this.midterm + this.final)/3

 
 

  constructor() { }

  ngOnInit(): void {
  }


}
