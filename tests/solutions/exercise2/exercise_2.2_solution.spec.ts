import { test, expect } from "@playwright/test";

test("Exercise 2.2 (DSB): locate, switch language, and assert", async ({ page }) => {
  await page.goto("https://www.dsb.dk/en/domestic/", { waitUntil: "domcontentloaded" });

  const acceptAllButton = page.getByRole("button", { name: "Accept all" });
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click();
  }

  const englishHeading = page.getByRole("heading", { name: "Find travel" });
  const fromButtonEnglish = page.getByRole("button", { name: "From:" });
  const toButtonEnglish = page.getByRole("button", { name: "To:" });
  const danishLink = page.getByRole("link", { name: "Dansk" });

  await expect(englishHeading).toBeVisible();
  await expect(fromButtonEnglish).toBeVisible();
  await expect(toButtonEnglish).toBeVisible();
  await expect(danishLink).toBeVisible();

  await danishLink.click();

  const danishHeading = page.getByRole("heading", { name: "Find rejse" });
  const fromButtonDanish = page.getByRole("button", { name: "Fra:" });
  const toButtonDanish = page.getByRole("button", { name: "Til:" });
  const loginLinkDanish = page.getByRole("link", { name: "Log ind" });

  await expect(danishHeading).toBeVisible();
  await expect(fromButtonDanish).toBeVisible();
  await expect(toButtonDanish).toBeVisible();
  await expect(loginLinkDanish).toBeVisible();

  await page.screenshot({ path: "screenshots/day1_ex2_2_dsb.png", fullPage: true });
});
