import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showData($event:any){
    console.log("Registration is clicked"); if($event){
      console.log($event.target);
    }
  }
  homeImg:string="./assets/images/home.jpg"
  blueImg:string="./assets/images/blueberry.jpg"
  strawImg:string="./assets/images/strawberry.jpg"
  lemonImg:string="./assets/images/lemon.jpg"
  popsImg:string="./assets/images/pops.jpg"
  pumpkinImg:string="./assets/images/pumpkin.jpg"
  rollsImg:string="./assets/images/rolls.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
