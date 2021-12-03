import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsInDetailRoutingModule } from './components-in-detail-routing.module';
import { AccessToContentChildComponent } from './access-to-content-child/access-to-content-child.component';
import { AccessToHtmlElementsComponent } from './access-to-html-elements/access-to-html-elements.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { CreateComponentsComponent } from './create-components/create-components.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ParameterPassingComponent } from './parameter-passing/parameter-passing.component';
import { StylesViewIncapsulationComponent } from './styles-view-incapsulation/styles-view-incapsulation.component';
import { TransferHtmlToComponentComponent } from './transfer-html-to-component/transfer-html-to-component.component';


@NgModule({
  declarations: [
    AccessToContentChildComponent,
    AccessToHtmlElementsComponent,
    ChangeDetectionStrategyComponent,
    CreateComponentsComponent,
    LifecycleHooksComponent,
    ParameterPassingComponent,
    StylesViewIncapsulationComponent,
    TransferHtmlToComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentsInDetailRoutingModule
  ]
})
export class ComponentsInDetailModule { }
