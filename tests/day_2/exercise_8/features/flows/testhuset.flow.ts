// flows/testhuset.flow.ts
import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import TestHusetPage from "../pages/testhuset.page";
import { logger } from "../../../../utils/logger";

const BASE_URL = "https://testhuset.dk";

export class TestHusetFlow {
  private testhusetPage: TestHusetPage;

  constructor(private page: Page) {
    this.testhusetPage = new TestHusetPage(page);
  }

  // ------ ACTIONS ------
  async gotoHome() {
    await this.page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
  }

  /**
   * This function handles the cookie pop up.
   *
   */
  async acceptCookiesIfPresent() {
    const header = this.testhusetPage.cookieBotDialogHeader();
    if (await header.isVisible().catch(() => false)) {
      logger.info("Handling cookie dialog…");
      await this.testhusetPage.cookieDialogAcceptBtn().click();
    }
  }

  async openCourseMenu() {}

  async openPlaywrightCourse() {}

  // ------ EXPECTS ------
  async expectCourseTitle(expected: string) {}

  async expectPrice(expected: string) {}
}
