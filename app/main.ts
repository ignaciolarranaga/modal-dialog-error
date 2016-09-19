// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ActivityIndicatorDialog } from "./activity-indicator-dialog.component";

@NgModule({
    declarations: [AppComponent, ActivityIndicatorDialog],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    providers: [ModalDialogService],
    entryComponents: [ ActivityIndicatorDialog ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);