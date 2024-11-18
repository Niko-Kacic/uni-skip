import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerLoginComponent } from './pages/costumer-login/costumer-login.component';
import { StoreSelectionComponent } from './pages/store-selection/store-selection.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CostumerLoginComponent,
    StoreSelectionComponent,
    MenuComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
