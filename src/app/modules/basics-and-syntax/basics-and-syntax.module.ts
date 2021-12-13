import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsAndSyntaxRoutingModule } from './basics-and-syntax-routing.module';
import { ConditionalDisplayNgifElseComponent } from './pages/conditional-display-ngif-else/conditional-display-ngif-else.component';
import { DynamicClassesNgClassComponent } from './pages/dynamic-classes-ng-class/dynamic-classes-ng-class.component';
import { EventBindingsComponent } from './pages/event-bindings/event-bindings.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { SeriesNgForComponent } from './pages/series-ng-for/series-ng-for.component';
import { TemplatesStylesComponent } from './pages/templates-styles/templates-styles.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { WhatIsBindingsComponent } from './pages/what-is-bindings/what-is-bindings.component';
import { WhatIsPipesComponent } from './pages/what-is-pipes/what-is-pipes.component';
import { BasicsNavComponent } from './bs-shared/basics-nav/basics-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConditionalDisplayNgifElseComponent,
    DynamicClassesNgClassComponent,
    EventBindingsComponent,
    InterpolationComponent,
    NgStyleComponent,
    NgSwitchComponent,
    SeriesNgForComponent,
    TemplatesStylesComponent,
    TwoWayBindingComponent,
    WhatIsBindingsComponent,
    WhatIsPipesComponent,
    BasicsNavComponent
  ],
  imports: [
    CommonModule,
    BasicsAndSyntaxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ConditionalDisplayNgifElseComponent,
    DynamicClassesNgClassComponent,
    EventBindingsComponent,
    InterpolationComponent,
    NgStyleComponent,
    NgSwitchComponent,
    SeriesNgForComponent,
    TemplatesStylesComponent,
    TwoWayBindingComponent,
    WhatIsBindingsComponent,
    WhatIsPipesComponent
  ]
})
export class BasicsAndSyntaxModule { }
