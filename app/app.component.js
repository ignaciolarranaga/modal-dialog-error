"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var activity_indicator_dialog_component_1 = require("./activity-indicator-dialog.component");
var AppComponent = (function () {
    function AppComponent(_modalDialogService) {
        this._modalDialogService = _modalDialogService;
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        // Open the activity dialog
        var options = {
            context: { waitingText: "Waiting!!" },
            fullscreen: true
        };
        this._modalDialogService.showModal(activity_indicator_dialog_component_1.ActivityIndicatorDialog, options);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map