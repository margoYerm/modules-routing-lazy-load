import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { AddEventsComponent } from './add-events/add-events.component';
import { CreateDirectiveComponent } from './create-directive/create-directive.component';
import { CreateStructuralDirectiveComponent } from './create-structural-directive/create-structural-directive.component';
import { GetAccessToElementComponent } from './get-access-to-element/get-access-to-element.component';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { SendParametersToDirectiveComponent } from './send-parameters-to-directive/send-parameters-to-directive.component';
import { DirectivesNavComponent } from './directives-nav/directives-nav.component';


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
