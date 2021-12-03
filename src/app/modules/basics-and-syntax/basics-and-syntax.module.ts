import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsAndSyntaxRoutingModule } from './basics-and-syntax-routing.module';
import { ConditionalDisplayNgifElseComponent } from './conditional-display-ngif-else/conditional-display-ngif-else.component';
import { DynamicClassesNgClassComponent } from './dynamic-classes-ng-class/dynamic-classes-ng-class.component';
import { EventBindingsComponent } from './event-bindings/event-bindings.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { SeriesNgForComponent } from './series-ng-for/series-ng-for.component';
import { TemplatesStylesComponent } from './templates-styles/templates-styles.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { WhatIsBindingsComponent } from './what-is-bindings/what-is-bindings.component';
import { WhatIsPipesComponent } from './what-is-pipes/what-is-pipes.component';
import { BasicsNavComponent } from './basics-nav/basics-nav.component';


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
    BasicsAndSyntaxRoutingModule
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
