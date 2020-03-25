import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SwimIntroductionComponent } from './swim-introduction/swim-introduction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PorductListComponent } from './porduct-list/porduct-list.component';

const routes: Routes = [
{ path: 'Home',
    component: HomeComponent },
{ path: 'SwimIntroduction',
   component: SwimIntroductionComponent },
{ path: 'PorductList',
   component: PorductListComponent },
{ path: 'Login',
   component: LoginComponent },
{ path: 'cart',
   component: CartComponent },
{ path: '',
   redirectTo: '/Home',
   pathMatch: 'full'},
{ path: '**',
   component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
