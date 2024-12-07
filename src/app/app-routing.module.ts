import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerLoginComponent } from './pages/costumer-login/costumer-login.component';
import { StoreSelectionComponent } from './pages/store-selection/store-selection.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MenuComponent } from './pages/menu/menu.component'; 
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SettingsComponent } from './pages/settings/settings.component';
import  { ProfileComponent } from './pages/profile/profile.component';  

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CostumerLoginComponent },
  { path: 'store-selection', component: StoreSelectionComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'menu/:storeId', component: MenuComponent }, 
  { path: 'welcome-page', component: WelcomePageComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'profile', component: ProfileComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
