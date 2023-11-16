import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: 'flights-search',
            component: FlightsComponent
        }
    ])
  ]
})
export class FlightsModuleModule { }
