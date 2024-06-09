import {NgModule} from "@angular/core";
import {PrimengWidgetModule} from "../../shared/primeng.module";
import {SharedModule} from "primeng/api";
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    PrimengWidgetModule,
    SharedModule,
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule {}
