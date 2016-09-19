"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var fake_component_1 = require("./fake.component");
var navigation_component_1 = require("./navigation.component");
var activity_indicator_dialog_component_1 = require("./activity-indicator-dialog.component");
var app_routing_1 = require("./app.routing");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, activity_indicator_dialog_component_1.ActivityIndicatorDialog, fake_component_1.FakeComponent, navigation_component_1.NavigationComponent],
            bootstrap: [navigation_component_1.NavigationComponent],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes)
            ],
            providers: [modal_dialog_1.ModalDialogService],
            entryComponents: [activity_indicator_dialog_component_1.ActivityIndicatorDialog]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map