import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesNavComponent } from './d-shared/directives-nav/directives-nav.component';
import { AddEventsComponent } from './pages/add-events/add-events.component';
import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { CreateStructuralDirectiveComponent } from './pages/create-structural-directive/create-structural-directive.component';
import { GetAccessToElementComponent } from './pages/get-access-to-element/get-access-to-element.component';
import { HostBindingComponent } from './pages/host-binding/host-binding.component';
import { SendParametersToDirectiveComponent } from './pages/send-parameters-to-directive/send-parameters-to-directive.component';

const directivesRoutes: Routes = [
  {
    path: '',
    component: DirectivesNavComponent,
    children: [
      {
        path: '',
        component: DirectivesNavComponent,
      },
      {
        path: 'add-events',
        component: AddEventsComponent,
      },
      {
        path: 'create-directive',
        component: CreateDirectiveComponent,
      },
      {
        path: 'create-structural-directive',
        component: CreateStructuralDirectiveComponent,
      },
      {
        path: 'get-access-to-element',
        component: GetAccessToElementComponent,
      },
      {
        path: 'host-binding',
        component: HostBindingComponent,
      },
      {
        path: 'send-parameters-to-directive',
        component: SendParametersToDirectiveComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
