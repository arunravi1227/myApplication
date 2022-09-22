import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [{

  path:'aboutus',
  component:AboutusComponent,
  children:[{
    path:'component1',
    component:Component1Component
  },
   { path:'component2',
    component:Component2Component
  }]

},
{
path:'contactus',
component:ContactusComponent,

},
{
  path:"**",
  component:PagenotfoundComponent
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
