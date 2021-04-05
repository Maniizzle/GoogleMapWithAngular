import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectionDirectiveDirective } from './DirectionDirective.directive';
import { MapComponent } from './Map/Map.component';
import { RoadtestComponent } from './roadtest/roadtest.component';

const routes: Routes = [ { path: '', component: MapComponent },{ path: 'road', component: RoadtestComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
