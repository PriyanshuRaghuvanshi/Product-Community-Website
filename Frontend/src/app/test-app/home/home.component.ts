import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery: any;
  products: any;
  stats: any
  constructor(private service: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.showStats();
  }

  showStats(){
    this.service.showStats().subscribe(
      (data)=>{
        console.warn(data);
        this.stats = data;
                  
      }
    )
  }

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

 
}
// The searchedProducts() function retrieves a value from the browser's local storage under the key "products".
// If the retrieved value is not null, it parses the value from JSON format and returns it as an array. 
// If the retrieved value is null, it returns an empty array.

// The OnInput() function is an event handler that is triggered when an input event occurs.
//  It takes the event object as a parameter and assigns the value of the input to this.searchQuery. 
//  It then calls a searchProducts() function on a service (presumably an HTTP service) passing this.searchQuery 
//  as a parameter. It subscribes to the observable returned by the searchProducts() function and handles 
//  the response data by assigning it to this.products. It also calls a sProducts() function on the service 
//  passing this.products as a parameter.
//   Finally, it scrolls the window to the position 8000 pixels from the top