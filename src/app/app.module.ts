import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmDirectionModule } from 'agm-direction';
import { AppRoutingModule } from './app-routing.module';
import {AgmCoreModule,GoogleMapsAPIWrapper} from '@agm/core';
import { AppComponent } from './app.component';
import {DirectionDirectiveDirective} from './DirectionDirective.directive'
import { RoadtestComponent } from './roadtest/roadtest.component';
import { MapComponent } from './Map/Map.component';
@NgModule({
  declarations: [		
    
    AppComponent,
      RoadtestComponent,
      MapComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, AgmDirectionModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD85MBd_qQSePBAr3kbmraH4xUNn5sT5GE',
    libraries:['places']})
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
