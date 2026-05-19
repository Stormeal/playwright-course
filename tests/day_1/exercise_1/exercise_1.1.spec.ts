import { test, expect } from "@playwright/test";

test("Exercise 1: open site and take screenshot", async ({ page }) => {
  await page.goto("https://testhuset.dk", { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: "screenshots/day1_exercise1.png", fullPage: true });
});
