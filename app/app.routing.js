"use strict";
var app_component_1 = require("./app.component");
var fake_component_1 = require("./fake.component");
exports.appRoutes = [
    { path: "", redirectTo: "/FakeComponent", pathMatch: "full" },
    // Client Pages
    { path: "FakeComponent", component: fake_component_1.FakeComponent },
    { path: "AppComponent", component: app_component_1.AppComponent }
];
//# sourceMappingURL=app.routing.js.map