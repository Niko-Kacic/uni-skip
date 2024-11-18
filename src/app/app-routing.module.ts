import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerLoginComponent } from './pages/costumer-login/costumer-login.component';
import { StoreSelectionComponent } from './pages/store-selection/store-selection.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
// import { MenuComponent } from './menu/menu.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CostumerLoginComponent },
  { path: 'store-selection', component: StoreSelectionComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent}
  // { path: 'menu/:storeId', component: MenuComponent }, // Ruta dinámica para el menú
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
