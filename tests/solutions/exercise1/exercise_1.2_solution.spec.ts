import { test, expect } from "@playwright/test";

test("Exercise 1.2 (DSB): one context with multiple pages", async ({ browser }) => {
  const context = await browser.newContext();

  try {
    const domesticPage = await context.newPage();
    await domesticPage.goto("https://www.dsb.dk/en/domestic/", {
      waitUntil: "domcontentloaded",
    });

    const danishDomesticPage = await context.newPage();
    await danishDomesticPage.goto("https://www.dsb.dk/da/domestic/", {
      waitUntil: "domcontentloaded",
    });

    await expect(context.pages()).toHaveLength(2);

    await expect(domesticPage).toHaveURL(/\/en\/domestic/);
    await expect(danishDomesticPage).toHaveURL(/\/da\/domestic/);

    await domesticPage.screenshot({
      path: "screenshots/day1_ex1_2_domestic_en.png",
      fullPage: true,
    });

    await danishDomesticPage.screenshot({
      path: "screenshots/day1_ex1_2_domestic_da.png",
      fullPage: true,
    });
  } finally {
    await context.close();
  }
});
