import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsInDetailRoutingModule } from './components-in-detail-routing.module';
import { AccessToContentChildComponent } from './pages/access-to-content-child/access-to-content-child.component';
import { AccessToHtmlElementsComponent } from './pages/access-to-html-elements/access-to-html-elements.component';
import { ChangeDetectionStrategyComponent } from './pages/change-detection-strategy/change-detection-strategy.component';
import { CreateComponentsComponent } from './pages/create-components/create-components.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { ParameterPassingComponent } from './pages/parameter-passing/parameter-passing.component';
import { StylesViewIncapsulationComponent } from './pages/styles-view-incapsulation/styles-view-incapsulation.component';
import { TransferHtmlToComponentComponent } from './pages/transfer-html-to-component/transfer-html-to-component.component';
import { ComponentsNavComponent } from './cd-shared/components-nav/components-nav.component';
import { PostCreateComponentComponent } from './cd-shared/post-create-component/post-create-component.component';
import { ColoryDirective } from './pages/create-components/colory.directive';


@NgModule({
  declarations: [
    AccessToContentChildComponent,
    AccessToHtmlElementsComponent,
    ChangeDetectionStrategyComponent,
    CreateComponentsComponent,
    LifecycleHooksComponent,
    ParameterPassingComponent,
    StylesViewIncapsulationComponent,
    TransferHtmlToComponentComponent,    
    ComponentsNavComponent,
    PostCreateComponentComponent,
    ColoryDirective,
  ],
  imports: [
    CommonModule,
    ComponentsInDetailRoutingModule
  ]
})
export class ComponentsInDetailModule { }
