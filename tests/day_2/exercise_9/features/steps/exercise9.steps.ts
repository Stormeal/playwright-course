// steps/testhuset.steps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import type { CustomWorld } from "../../support/world";
import { TestHusetFlow } from "../flows/testhuset.flow";

Given("the user is on the Testhuset homepage", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.gotoHome();
});

Given("the user has accepted the dialog button if it appears", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.acceptCookiesIfPresent();
});
