import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { MyservicesService } from './services/myservices.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    MiddleComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }



