import { setWorldConstructor } from "@cucumber/cucumber";
import type { Browser, BrowserContext, Page } from "playwright";

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
}

setWorldConstructor(CustomWorld);