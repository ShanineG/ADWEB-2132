import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  product: any[] = [
    {
      "prod_name": "Pumpkin Cheesecake",
      "prod_ID": "20653241",
      "price": "$165.00"
    },
    {
      "prod_name": "Blueberry Cheesecake",
      "prod_ID": "20654130",
      "price": "$190.00"
    },
    {
      "prod_name": "Lemon Cheesecake",
      "prod_ID": "20651276",
      "price": "$150.00"
    },
    {
      "prod_name": "Strawberry Cheesecake",
      "prod_ID": "20657631",
      "price": "$200.00"
    },
    {
      "prod_name": "Rolls Cheesecake",
      "prod_ID": "20650965",
      "price": "$50.00"
    },
    {
      "prod_name": "Pops Cheesecake",
      "prod_ID": "20650498 ",
      "price": "$10.00"
    }
  ];
  
  ngOnInit(): void {
  }

}