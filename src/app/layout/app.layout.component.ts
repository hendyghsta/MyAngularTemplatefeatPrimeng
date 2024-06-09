import {Component} from "@angular/core";

@Component({
  selector: "app-layout",
  template: `
    <app-topbar></app-topbar>
    <router-outlet></router-outlet>
  `,
})
export class AppLayoutComponent {}
