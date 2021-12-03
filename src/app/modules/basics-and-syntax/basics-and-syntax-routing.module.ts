import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalDisplayNgifElseComponent } from './conditional-display-ngif-else/conditional-display-ngif-else.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BasicsNavComponent } from './basics-nav/basics-nav.component'

const routes: Routes = [ 
  {
    path: '',
    component: BasicsNavComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsAndSyntaxRoutingModule {}
