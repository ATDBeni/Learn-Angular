import { Component } from "@angular/core";

@Component({
    selector:"pm-products",
    templateUrl: "./product-list.component.html",


})

export class ProductListComponent{
  pageTitle: string = "Showe list";
  showImg:boolean = false;
  listFilter : string = 'cart';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any[] = 
  [

    {
        "productID" : 2,
        "productName" : "Nike",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff2e824-a8e5-482a-aedf-8a7604c0a401/pegasus-40-eliud-kipchoge-road-running-shoes-zT4Swk.png"
    },
    {
        "productID" : 2,
        "productName" : "Nike1",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10,2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7be72388-aeb0-4790-8c30-d0793e79cc49/vaporfly-3-eliud-kipchoge-road-racing-shoes-3PPln3.png"
    },
    {
        "productID" : 2,
        "productName" : "Nike2",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10,2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/883b91d6-e506-402c-919b-e5f6ae939221/structure-25-road-running-shoes-rVDnPg.png"
    },
    {
        "productID" : 2,
        "productName" : "Nike3",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10,2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/be33804b-50b9-4851-9bc4-1d9b534b9c4f/pegasus-40-road-running-shoes-HTDVsQ.png"
    },
    {
        "productID" : 2,
        "productName" : "Nike4",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10,2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8463e545-701f-496d-a794-3bf38910d604/infinityrn-4-road-running-shoes-Wt3Dww.png"
    },
    {
        "productID" : 2,
        "productName" : "Nike5",
        "productCode" : "GDN-0023",
        "releaseDate": "March 10,2021",
        "description": "15 gallon capacity rolling garden cart",
        "price" : 200.00,
        "startRating" : 4.0,
        "imageUrl": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49e100a4-6f50-4ac6-9dd9-4410185b0d43/invincible-3-road-running-shoes-LbMlVN.png"
    },

 ];
toggleImage():void{

 this.showImg = !this.showImg;

}
}