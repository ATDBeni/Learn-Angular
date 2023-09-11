import { Component } from "@angular/core";

@Component({
    selector:"pm-products",
    templateUrl: "./product-list.component.html",


})

export class ProductListComponent{
  pageTitle: string = "Showe list";
  products: any[] = [
    {
        "productID" : 2,
        "productName" : "Garden Cart",
        "productCode" : "GDN-0023"
    }
  ]


}