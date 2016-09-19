import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FakeComponent } from "./fake.component";
import { NavigationComponent } from "./navigation.component";

export const appRoutes: Routes = [
    { path: "", redirectTo: "/FakeComponent", pathMatch: "full" },
    // Client Pages
    { path: "FakeComponent", component: FakeComponent },
    { path: "AppComponent", component: AppComponent }
];