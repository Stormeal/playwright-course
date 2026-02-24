import { Before, After } from "@cucumber/cucumber";
import * as pw from "playwright";
import type { CustomWorld } from "./world";

Before(async function (this: CustomWorld) {
  this.browser = await pw.chromium.launch({ headless: true }); // set false to watch it
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.context?.close();
  await this.browser?.close();
});