"use strict";
var core_1 = require("@angular/core");
var FakeComponent = (function () {
    function FakeComponent() {
    }
    FakeComponent = __decorate([
        core_1.Component({
            selector: "fake-component",
            template: "\n        <Button text='TAP to Navigte' [nsRouterLink]=\"['/AppComponent']\"></Button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], FakeComponent);
    return FakeComponent;
}());
exports.FakeComponent = FakeComponent;
//# sourceMappingURL=fake.component.js.map