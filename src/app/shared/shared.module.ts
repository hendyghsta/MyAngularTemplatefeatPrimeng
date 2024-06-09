import {isDevMode, NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrimengWidgetModule} from "./primeng.module";


@NgModule({
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengWidgetModule,
  ]
})
export class SharedModule {}
