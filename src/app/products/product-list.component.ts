import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  sub: any;
  constructor(private productService: ProductService){

  }
  
  ngOnInit(): void {
    this.sub =this.productService.getProducts().subscribe({
      next:(products: IProduct[]) => 
      {this.products = products;
      this.filteredProducts = this.products;
    },
      error: (err: any) =>this.errorMessage = err
    });
    
    
    
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Productlist: ' + message;
  }
    pageTitle:string = 'productlist!';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    private _listFilter: string = '';

    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value:string){
      console.log(value);
      this._listFilter = value;
      console.log('in setter', value);
      this.filteredProducts = this.performFilter(value);
    }
    filteredProducts:IProduct[] = [];
    products:IProduct[] =  []
        
    performFilter(filterBy: string):IProduct[] {
     filterBy = filterBy.toLocaleLowerCase();
     return this.products.filter ((product:IProduct) =>
     product.productName.toLocaleLowerCase().includes(filterBy));
    }
     toggleImage(): void{
        this.showImage = !this.showImage
     }
    
}