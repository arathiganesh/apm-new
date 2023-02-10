import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor() {}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
pageTitle: string = 'Product Detail';

}
