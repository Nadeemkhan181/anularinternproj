import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  
  {path : '', component: FormComponentComponent},
  {path : 'list-component', component: ListComponentComponent}
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
