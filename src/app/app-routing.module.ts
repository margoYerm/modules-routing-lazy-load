import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: 'basic-and-syntax',
    loadChildren: () =>
      import('./modules/basics-and-syntax/basics-and-syntax.module').then(
        (m) => m.BasicsAndSyntaxModule
      ),
  },
  {
    path: 'modules',
    loadChildren: () =>
      import(
        './modules/components-in-detail/components-in-detail.module'
      ).then((m) => m.ComponentsInDetailModule),
  },
  { path: '**', redirectTo: 'basic-and-syntax' },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
