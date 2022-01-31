import { AppRoutingModule } from './app-routing.module';
import { NewItemsComponent } from './new-items/new-items.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeItemComponent } from './home/home-list/home-item/home-item.component';
import { PetService } from './login.service';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    HomeDetailsComponent,
    HomeListComponent,
    HomeItemComponent,
    ItemsComponent,
    NewItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
