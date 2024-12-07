import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerLoginComponent } from './pages/costumer-login/costumer-login.component';
import { StoreSelectionComponent } from './pages/store-selection/store-selection.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    CostumerLoginComponent,
    StoreSelectionComponent,
    MenuComponent,
    ForgotPasswordComponent,
    WelcomePageComponent,
    RegisterComponent,
    ShoppingCartComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
