import {Component} from "@angular/core";

@Component({
    selector: "fake-component",
    template: `
        <Button text='TAP to Navigte' [nsRouterLink]="['/AppComponent']"></Button>
    `
})
export class FakeComponent {
}