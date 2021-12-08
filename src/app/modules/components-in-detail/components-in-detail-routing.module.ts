import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessToContentChildComponent } from './pages/access-to-content-child/access-to-content-child.component';
import { ChangeDetectionStrategyComponent } from './pages/change-detection-strategy/change-detection-strategy.component';
import { ComponentsNavComponent } from './cd-shared/components-nav/components-nav.component';
import { CreateComponentsComponent } from './pages/create-components/create-components.component';
import { AccessToHtmlElementsComponent } from './pages/access-to-html-elements/access-to-html-elements.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { ParameterPassingComponent } from './pages/parameter-passing/parameter-passing.component';
import { StylesViewIncapsulationComponent } from './pages/styles-view-incapsulation/styles-view-incapsulation.component';
import { TransferHtmlToComponentComponent } from './pages/transfer-html-to-component/transfer-html-to-component.component';
import { PassingParamsFromComponentsComponent } from './pages/passing-params-from-components/passing-params-from-components.component';

const componentsRoutes: Routes = [
  {
    path: '',
    component: ComponentsNavComponent,
    children: [
      {
        path: 'access-to-content-child',
        component: AccessToContentChildComponent,
      },
      {
        path: 'access-to-html-elements',
        component: AccessToHtmlElementsComponent,
      },
      {
        path: 'change-detection-strategy',
        component: ChangeDetectionStrategyComponent,
      },
      {
        path: 'create-components',
        component: CreateComponentsComponent,
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent,
      },
      {
        path: 'parameter-passing',
        component: ParameterPassingComponent,
      },
      {
        path: 'passing-params-from-components',
        component: PassingParamsFromComponentsComponent,
      },
      {
        path: 'styles-view-incapsulation',
        component: StylesViewIncapsulationComponent,
      },
      {
        path: 'styles-view-incapsulation',
        component: StylesViewIncapsulationComponent,
      },
      {
        path: 'transfer-html-to-component',
        component: TransferHtmlToComponentComponent,
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule],
})
export class ComponentsInDetailRoutingModule {}
