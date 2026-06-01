import { test, expect, Locator } from "@playwright/test";

test.afterEach("Close browser", async ({ page }) => {
  page.close();
});

test("Exercise 4 - Mission Control Crew Roster", async ({ page }) => {
  await test.step("TC1: Navigation", async () => {});

  await test.step("TC2: Adding new crew member to roster", async () => {});

  await test.step("TC3: Locate and update Ava clearance level", async () => {});

  await test.step("TC4: Inspect crew dossier intel", async () => {});

  await test.step("TC5: Capture a screenshot of the final verified roster state", async () => {});
});
