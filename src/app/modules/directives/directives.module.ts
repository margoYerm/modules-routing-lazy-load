import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { AddEventsComponent } from './pages/add-events/add-events.component';
import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { CreateStructuralDirectiveComponent } from './pages/create-structural-directive/create-structural-directive.component';
import { GetAccessToElementComponent } from './pages/get-access-to-element/get-access-to-element.component';
import { HostBindingComponent } from './pages/host-binding/host-binding.component';
import { SendParametersToDirectiveComponent } from './pages/send-parameters-to-directive/send-parameters-to-directive.component';
import { DirectivesNavComponent } from './d-shared/directives-nav/directives-nav.component';


@NgModule({
  declarations: [
    AddEventsComponent,
    CreateDirectiveComponent,
    CreateStructuralDirectiveComponent,
    GetAccessToElementComponent,
    HostBindingComponent,
    SendParametersToDirectiveComponent,
    DirectivesNavComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
