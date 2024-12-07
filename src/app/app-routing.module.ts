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
import { ProfileComponent } from './pages/profile/profile.component';
import { StoreComponent } from './pages/store/store.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CostumerLoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [GuestGuard] },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
  { path: 'store-selection', component: StoreSelectionComponent, canActivate: [AuthGuard] },
  { path: 'menu/:storeId', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'welcome-page', component: WelcomePageComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
