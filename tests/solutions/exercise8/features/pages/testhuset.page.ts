import type { Page } from "@playwright/test";

export default class TestHusetPage {
  constructor(private page: Page) {}

  cookieBotDialogHeader = () => this.page.locator("#CybotCookiebotDialogHeader");
  cookieDialogAcceptBtn = () => this.page.getByRole("button", { name: "Tillad valgte" });
  playwrightCourseItem = () => this.page.locator('a:has-text("Automatisering med Playwright")');
  courseTitle = () => this.page.locator("h1.hero-title");
  pricingContainer = () => this.page.locator("div.pricing-part");
  price = () => this.pricingContainer().locator("span[data-variation-price]");
  courseMenuBtn = () => this.page.getByRole("link", { name: "Kursus", exact: true });
}
