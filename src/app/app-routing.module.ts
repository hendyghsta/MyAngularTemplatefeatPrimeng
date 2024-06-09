import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', loadChildren: () => import('./layout/app.layout.module').then(m => m.AppLayoutModule)},
  {path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload"
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
