import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { SellerComponent } from './shared/pages/seller/seller.component';

const routes: Routes = [
  //== default route redirect to login page
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,    
  },
  {
    path: 'become-a-seller',
    component: SellerComponent,    
  },
  //== account routes
  {
    path: 'login',
    component: LoginComponent,    
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  //== page not found route
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
