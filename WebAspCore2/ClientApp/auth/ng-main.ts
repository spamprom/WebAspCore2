import '../ng-polyfills';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModuleUser } from "./app.module.user";
import { enableProdMode } from "@angular/core";

declare const Reflect: any;

export function main() {
    return platformBrowserDynamic()
        .bootstrapModule(AppModuleUser)
}
main();