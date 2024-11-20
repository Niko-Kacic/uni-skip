import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerLoginComponent } from './pages/costumer-login/costumer-login.component';
import { StoreSelectionComponent } from './pages/store-selection/store-selection.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MenuComponent } from './pages/menu/menu.component'; 
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CostumerLoginComponent },
  { path: 'store-selection', component: StoreSelectionComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'menu/:storeId', component: MenuComponent }, 
  { path: 'welcome-page', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
