import {NgModule} from "@angular/core";
import {MainRoutingModule} from "../component/main/main-routing.module";
import {AppLayoutComponent} from "./app.layout.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MainModule} from "../component/main/main.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { AppTopbarComponent } from './app.topbar/app.topbar.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppTopbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MainModule,
    MainRoutingModule,
    NgOptimizedImage
  ],
  exports: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule {}
