import type { Page } from "@playwright/test";

export default class TestHusetPage {
  constructor(private page: Page) {}

  cookieBotDialogHeader = () => this.page.locator("#CybotCookiebotDialogHeader");
  cookieDialogAcceptBtn = () => this.page.getByRole("button", { name: "Tillad valgte" });
  // playwrightCourseItem = () =>
  // courseTitle = () =>
  // pricingContainer = () =>
  // price = () =>
  // courseMenuBtn = () =>
}
