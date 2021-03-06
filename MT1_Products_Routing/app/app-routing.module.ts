import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; //
import { ContactComponent } from './contact/contact.component'; //
import { HomeComponent } from './home/home.component'; //
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; //
import { ProductDetailsComponent } from './product-details/product-details.component'; //
import { ProductsComponent } from './products/products.component'; //

const routes: Routes = [{path: 'about', component:AboutComponent},
                        {path: 'contact', component:ContactComponent},
                        {path: 'home', component:HomeComponent},
                        {path: 'products', component:ProductsComponent},
                        {path: 'product-details', component:ProductDetailsComponent},
                        {path: '**', component:PageNotFoundComponent},
                        {path: '', redirectTo:'home', pathMatch: 'full' }
                      ];

@NgModule({
  declarations: [], //
  imports: [RouterModule.forRoot(routes)], //
  exports: [RouterModule] //
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ProductsComponent, ProductDetailsComponent, ContactComponent, PageNotFoundComponent]
