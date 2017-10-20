import './ng-polyfills';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModuleMain } from "./app.module.main";
import { enableProdMode } from "@angular/core";

declare const Reflect: any;

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModuleMain)
}
main();