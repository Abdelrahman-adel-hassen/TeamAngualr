import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouriteComponent } from './favourite.component';

const routes=[
  { path:'',component:FavouriteComponent}
 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class FavouriteRoutingModule { }
