import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
    selector:"pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list-component.css"],


})

export class ProductListComponent implements OnInit{
  pageTitle: string = "Showe list";
  showImg:boolean = false;
   imageWidth: number = 100;
  imageHeight:number = 100
  imageMargin: number = 5;

  private _listFilter: string = ' ' ;
  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performeFilter(value)
  }
filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

 constructor(private productService: ProductService) {}


performeFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct)  =>  
      product.productName.toLocaleLowerCase().includes(filterBy));
}

toggleImage():void{

 this.showImg = !this.showImg;

}

ngOnInit(): void{
  this.products = this.productService.getProducts();
  this.filteredProducts = this.products;
 
}

  onRatingClicked(message: string):void{
    this.pageTitle = 'product List ' + message;
}


} 
 