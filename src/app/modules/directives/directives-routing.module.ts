import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesNavComponent } from './directives-nav/directives-nav.component';

const directivesRoutes: Routes = [
  {
    path: '',
    component: DirectivesNavComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
