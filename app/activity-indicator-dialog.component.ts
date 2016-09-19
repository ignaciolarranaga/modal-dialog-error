import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "activity-indicator-dialog",
    templateUrl: "activity-indicator-dialog.html",
    styleUrls: [ "activity-indicator-dialog-common.css" ]
})
export class ActivityIndicatorDialog {

    waitingText: string;
    finishedText: string;
    okButtonText: string;

    constructor(private _params: ModalDialogParams) {
        this.waitingText = _params.context.waitingText;
        this.finishedText = _params.context.finishedText;
        this.okButtonText = _params.context.okButtonText;
    }

    public close() {
        this._params.closeCallback();
    }

}