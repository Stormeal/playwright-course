import { test, expect } from "@playwright/test";

test("Exercise 3.2 (DSB): work with route planner text fields", async ({ page }) => {
  await page.goto("https://www.dsb.dk/en/domestic/", { waitUntil: "domcontentloaded" });

  const acceptAllButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click().catch(() => {});
  }

  await page
    .locator("#cookie-information-template-wrapper")
    .evaluate((el) => el.remove())
    .catch(() => {});

  const fromButton = page.getByRole("button", { name: "From:" });
  const toButton = page.getByRole("button", { name: "To:" });

  await test.step("Enter and correct the origin field", async () => {
    await fromButton.click();
    const fromInput = page.getByPlaceholder("Choose location");

    await fromInput.pressSequentially("Odense", { delay: 20 });
    await expect(page.locator('[data-testid="dropdown-list"] li').first()).toBeVisible();

    await fromInput.clear();
    await fromInput.fill("Odense St.");
    await expect(fromInput).toHaveValue("Odense St.");
  });

  await test.step("Enter and correct the destination field", async () => {
    await toButton.click();
    const toInput = page.getByPlaceholder("Choose destination");

    await toInput.fill("København H");
    await expect(toInput).toHaveValue("København H");

    await toInput.clear();
    await toInput.pressSequentially("København H", { delay: 20 });
    await expect(page.locator('[data-testid="dropdown-list"] li').first()).toBeVisible();
    await expect(toInput).toHaveValue("København H");
  });

  await test.step("Capture mission evidence", async () => {
    await page.screenshot({ path: "screenshots/day1_ex3_2_dsb.png", fullPage: true });
  });
});
