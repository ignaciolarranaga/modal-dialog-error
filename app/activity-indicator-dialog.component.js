"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ActivityIndicatorDialog = (function () {
    function ActivityIndicatorDialog(_params) {
        this._params = _params;
        this.waitingText = _params.context.waitingText;
        this.finishedText = _params.context.finishedText;
        this.okButtonText = _params.context.okButtonText;
    }
    ActivityIndicatorDialog.prototype.close = function () {
        this._params.closeCallback();
    };
    ActivityIndicatorDialog = __decorate([
        core_1.Component({
            selector: "activity-indicator-dialog",
            templateUrl: "activity-indicator-dialog.html",
            styleUrls: ["activity-indicator-dialog-common.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams])
    ], ActivityIndicatorDialog);
    return ActivityIndicatorDialog;
}());
exports.ActivityIndicatorDialog = ActivityIndicatorDialog;
//# sourceMappingURL=activity-indicator-dialog.component.js.map