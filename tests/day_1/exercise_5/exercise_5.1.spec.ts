import { test, expect, Page } from "@playwright/test";

test.afterEach("Close browser", async ({ page }) => {
  page.close();
});

test("Exercise 5 - Control Elements", async ({ page }) => {});
