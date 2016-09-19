// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { FakeComponent } from "./fake.component";
import { NavigationComponent } from "./navigation.component";
import { ActivityIndicatorDialog } from "./activity-indicator-dialog.component";
import { appRoutes } from "./app.routing";

@NgModule({
    declarations: [AppComponent, ActivityIndicatorDialog, FakeComponent, NavigationComponent],
    bootstrap: [NavigationComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
    providers: [ModalDialogService],
    entryComponents: [ ActivityIndicatorDialog ]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);