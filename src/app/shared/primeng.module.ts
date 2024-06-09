import {NgModule} from "@angular/core";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {CommonModule} from "@angular/common";
import {MenuModule} from "primeng/menu";
import {InputTextModule} from "primeng/inputtext";
import {SidebarModule} from "primeng/sidebar";
import {BadgeModule} from "primeng/badge";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TooltipModule} from "primeng/tooltip";
import {AvatarModule} from "primeng/avatar";
import {TableModule} from "primeng/table";
import {AutoCompleteModule} from "primeng/autocomplete";
import {PasswordModule} from "primeng/password";
import {InputMaskModule} from "primeng/inputmask";
import {CheckboxModule} from "primeng/checkbox";
import {DropdownModule} from "primeng/dropdown";
import {KeyFilterModule} from "primeng/keyfilter";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {DividerModule} from "primeng/divider";
import {ToggleButtonModule} from "primeng/togglebutton";
import {TreeModule} from "primeng/tree";
import {ContextMenuModule} from "primeng/contextmenu";
import {CalendarModule} from "primeng/calendar";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {OverlayModule} from "primeng/overlay";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {TagModule} from "primeng/tag";
import {ScrollTopModule} from "primeng/scrolltop";
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {ChipsModule} from "primeng/chips";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipModule} from "primeng/chip";
import {DeferModule} from "primeng/defer";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ImageModule} from "primeng/image";
import {TieredMenuModule} from "primeng/tieredmenu";
import {SelectButtonModule} from "primeng/selectbutton";
import {StepsModule} from "primeng/steps";
import {ListboxModule} from "primeng/listbox";
import {MegaMenuModule} from "primeng/megamenu";
import { TabViewModule } from "primeng/tabview";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { DataViewModule } from 'primeng/dataview';
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    TooltipModule,
    AvatarModule,
    ConfirmDialogModule,
    TableModule,
    AutoCompleteModule,
    PasswordModule,
    InputMaskModule,
    CheckboxModule,
    DropdownModule,
    KeyFilterModule,
    ConfirmPopupModule,
    DividerModule,
    ToggleButtonModule,
    TreeModule,
    ContextMenuModule,
    CalendarModule,
    BreadcrumbModule,
    TimelineModule,
    CardModule,
    InputNumberModule,
    OverlayModule,
    OverlayPanelModule,
    ButtonModule,
    RadioButtonModule,
    FileUploadModule,
    DialogModule,
    TagModule,
    ScrollTopModule,
    PanelModule,
    FieldsetModule,
    ChipsModule,
    ChipModule,
    MultiSelectModule,
    InputTextareaModule,
    DeferModule,
    ProgressSpinnerModule,
    InputGroupModule,
    InputGroupAddonModule,
    ImageModule,
    ScrollTopModule,
    TieredMenuModule,
    MegaMenuModule,
    SelectButtonModule,
    StepsModule,
    ListboxModule,
    TabViewModule,
    ScrollPanelModule,
    DataViewModule,
    ToolbarModule,
  ],
  providers: [
    MessageService, ConfirmationService
  ]
})

export class PrimengWidgetModule {
}
