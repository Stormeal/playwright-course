import { test, expect } from "@playwright/test";

test("Exercise 2.1 - Filling out the forms", async ({ page }) => {
  const cookieBotDialogHeader = page.locator("#CybotCookiebotDialogHeader");

  await test.step("Navigate to page", async () => {
    await page.goto("https://testhuset.dk", { waitUntil: "domcontentloaded" });

    // Handles the cookie dialog if it appears
    if (cookieBotDialogHeader) {
      const cookieDialogAcceptBtn = page.getByRole("button", { name: "Tillad valgte" });
      await cookieDialogAcceptBtn.click();
    }
  });

  await test.step("Press the KURSUS menu button", async () => {
    // TODO: Call the locator and use the click action to press the button
  });

  await test.step("Press the Playwright Course element and screenshot the page", async () => {
    // TODO: Call the locator and use the click action to press the element
  });

  await test.step("Assert course title and price", async () => {
    // TODO: Create two assertions to verify that the course title and price are correct
  });
});
