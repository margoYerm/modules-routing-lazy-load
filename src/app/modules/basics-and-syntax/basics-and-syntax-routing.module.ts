import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalDisplayNgifElseComponent } from './pages/conditional-display-ngif-else/conditional-display-ngif-else.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { BasicsNavComponent } from './bs-shared/basics-nav/basics-nav.component'
import { TemplatesStylesComponent } from './pages/templates-styles/templates-styles.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { WhatIsBindingsComponent } from './pages/what-is-bindings/what-is-bindings.component';
import { EventBindingsComponent } from './pages/event-bindings/event-bindings.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { DynamicClassesNgClassComponent } from './pages/dynamic-classes-ng-class/dynamic-classes-ng-class.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { SeriesNgForComponent } from './pages/series-ng-for/series-ng-for.component';
import { WhatIsPipesComponent } from './pages/what-is-pipes/what-is-pipes.component';
 
const routes: Routes = [ 
  {
    path:'',
    component: BasicsNavComponent,
    children: [
      {
        path: '',
        component: BasicsNavComponent,
      },
      {
        path: 'templates-styles',
        component: TemplatesStylesComponent,
      },      
      {
        path: 'interpolation',
        component: InterpolationComponent,
      },
      {
        path: 'what-is-bindings',
        component: WhatIsBindingsComponent,
      },
      {
        path: 'event-bindings',
        component: EventBindingsComponent,
      },
      {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
      },
      {
        path: 'ng-style',
        component: NgStyleComponent,
      },
      {
        path: 'dynamic-classes-ng-class',
        component: DynamicClassesNgClassComponent,
      },
      {
        path: 'dynamic-classes-ng-class',
        component: DynamicClassesNgClassComponent,
      },
      {
        path: 'app-conditional-display-ngif-else',
        component: ConditionalDisplayNgifElseComponent,
      },
      {
        path: 'ng-switch',
        component: NgSwitchComponent,
      },
      {
        path: 'series-ng-for',
        component: SeriesNgForComponent,
      },
      {
        path: 'what-is-pipes',
        component: WhatIsPipesComponent,
      },
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsAndSyntaxRoutingModule {}


