import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
// dialog login
import {MatDialogModule} from '@angular/material/dialog';
// form 
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
// reactive form
import { ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { AppComponent } from './app.component';

import "hammerjs";
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';

import {DishService } from './services/dish.service';
import {PromotionService } from './services/promotion.service';
import {CorporateLeaderService} from './services/corporate-leader.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { CorporateLeaderComponent } from './corporate-leader/corporate-leader.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContantComponent,
    CorporateLeaderComponent,
    LoginComponent,
     
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [
     DishService ,
     PromotionService,
     CorporateLeaderService
  ],
  entryComponents:[
    LoginComponent
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
 
 }
