import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessToContentChildComponent } from './access-to-content-child/access-to-content-child.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { ComponentsNavComponent } from './components-nav/components-nav.component';
import { CreateComponentsComponent } from './create-components/create-components.component';

const componentsRoutes: Routes = [
  {
    path: '',
    component: ComponentsNavComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule],
})
export class ComponentsInDetailRoutingModule {}
