import {Component} from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ActivityIndicatorDialog } from "./activity-indicator-dialog.component";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    constructor(private _modalDialogService: ModalDialogService) {}

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        // Open the activity dialog
        let options: ModalDialogOptions = {
            context: { waitingText: "Waiting!!" },
            fullscreen: true
        };
        this._modalDialogService.showModal(ActivityIndicatorDialog, options);
    }
}
