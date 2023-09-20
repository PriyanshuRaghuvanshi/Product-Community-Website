import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {
  
searchQuery: any;
products: any;
stats: any
inputFieldValue: string = '';
constructor(private service: ServicesService, private router: Router) { }
  addReview(pId: any){
    
    localStorage.setItem("reviewProductId",pId);
    this.router.navigate(['addReview']);
  }
  showReview(pId: any){

    localStorage.setItem("reviewProductId",pId);
    this.router.navigate(['showReview']);
  }

  loggedIn(){
    return this.service.isLogIn();
  }

  logout(){
    this.service.logout();
    this.router.navigate(['login']);
  }

  currentUser(){
    return this.service.getUser();
  }

  removeFilter(){
    localStorage.removeItem("products");
  }


  searchedProducts(){
   const p = localStorage.getItem("products");
   console.warn("Product = "+p);
   if(p!=null)
      return JSON.parse(p);
   return [];
  }

  OnInput(event: any) {
    this.inputFieldValue = event.target.value;
    this.searchQuery = event.target.value;
    console.warn("PEA "+this.searchQuery);
    if (this.searchQuery.length >= 3) {
    this.service.searchProducts(this.searchQuery).subscribe(

      data => {this.products = data
        this.service.sProducts(this.products);
        window.scrollTo(0,8000);
      },
      err => {
        console.log(err)
      }
    )
    } else{
      this.products = [];
    }  
  }
  showAllProducts() {
    const p = localStorage.getItem("products");
    console.warn("Hello Yaaraaa "+p);
    if(p!=null)
       return JSON.parse(p);
    return [];
  }
}
