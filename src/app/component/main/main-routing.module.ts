import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppLayoutComponent} from "../../layout/app.layout.component";
import {MainComponent} from "./main/main.component";


const routes: Routes = [
  {
    path:'', component: AppLayoutComponent,
    children: [
      {path: '', redirectTo: 'root', pathMatch: 'full'},
      {path: 'root', component: MainComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
