import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessToContentChildComponent } from './access-to-content-child/access-to-content-child.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { CreateComponentsComponent } from './create-components/create-components.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponentsComponent,
  },
  {
    path: 'AccessToContentChildComponent',
    component: AccessToContentChildComponent,
  },
  {
    path: 'ChangeDetectionStrategyComponent',
    component: ChangeDetectionStrategyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsInDetailRoutingModule {}
