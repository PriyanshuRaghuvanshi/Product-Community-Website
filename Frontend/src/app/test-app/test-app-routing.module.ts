import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewsComponent } from './add-reviews/add-reviews.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { ProductsComponent } from './admin/products/products.component';
import { ReviewsComponent } from './admin/reviews/reviews.component';
import { UsersComponent } from './admin/users/users.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestReviewComponent } from './request-review/request-review.component';

import { ShowReviewComponent } from './show-review/show-review.component';


import { normalGuard } from './guards/normal.guard';
import { adminGuard } from './guards/admin.guard';
import { SearchPageComponent } from './search-page/search-page.component';






const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'searchProduct',
    component: SearchPageComponent
  },
  {
    path: 'requestReview',
    component: RequestReviewComponent
  },
  {
    path:'admin',
    canActivate:[adminGuard],
    component: DashboardComponent,
    children:[
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      },
      {
        path: 'addProduct',
        component: AddProductComponent
      }
    ]
    
  },
  {
    path: 'addReview',
    canActivate: [normalGuard],
    component: AddReviewsComponent
  },
  {
    path: 'showReview',
    canActivate: [normalGuard],
    component: ShowReviewComponent
  },
  
  {
    path: '**',
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppRoutingModule { }
