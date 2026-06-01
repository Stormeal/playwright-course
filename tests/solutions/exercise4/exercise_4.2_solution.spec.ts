import { test, expect } from "@playwright/test";

test("Exercise 4.2 (DSB): station operations board update", async ({ page }) => {
  const baseUrl = "https://stormeal.github.io/lecture-page";
  const adminSection = page.getByTestId("user-admin");
  const addNameInput = adminSection.getByTestId("add-user-name");
  const addEmailInput = adminSection.getByTestId("add-user-email");
  const addRoleSelect = adminSection.getByTestId("add-user-role");
  const addStatusSelect = adminSection.getByTestId("add-user-status");
  const addUserSubmitBtn = page.getByTestId("add-user-submit");
  const rows = page.getByTestId("user-row");

  const rowByName = (name: string) =>
    rows.filter({
      has: page.getByTestId("user-name").filter({ hasText: name }),
    });

  await test.step("Navigate to the DSB staff board", async () => {
    console.log("Navigating to DSB staff board");
    await page.goto(`${baseUrl}/test-site/table`);
  });

  await test.step("Add a new station staff member", async () => {
    console.log("Adding station staff member: Ingrid Signal");
    await addNameInput.fill("Ingrid Signal");
    await addEmailInput.fill("ingrid.signal@dsb.dk");
    await addRoleSelect.selectOption({ label: "Guest" });
    await addStatusSelect.selectOption({ label: "Invited" });
    await addUserSubmitBtn.click();

    const ingridRow = rowByName("Ingrid Signal");
    await expect(ingridRow).toBeVisible();
  });

  await test.step("Filter and update Ada assignment", async () => {
    console.log("Updating row: Ada Lovelace");
    const invitedAdaRow = rowByName("Ada Lovelace").filter({
      has: page.getByTestId("badge-status-invited"),
    });

    await invitedAdaRow.getByTestId("user-role").selectOption({ label: "Manager" });
    await invitedAdaRow.getByTestId("user-status").selectOption({ label: "Active" });

    const adaRow = rowByName("Ada Lovelace");
    await expect(adaRow.getByTestId("user-role")).toHaveValue("Manager");
    await expect(adaRow.getByTestId("user-status")).toHaveValue("Active");
  });

  await test.step("Inspect hover-only information and actions", async () => {
    const adaRow = rowByName("Ada Lovelace");

    await adaRow.getByTestId("user-info").hover();
    await expect(page.getByRole("tooltip")).toBeVisible();

    await adaRow.hover();
    await expect(adaRow.getByTestId("user-remove")).toBeVisible();
  });

  await test.step("Capture final board evidence", async () => {
    await page.screenshot({ path: "screenshots/day1_ex4_2_dsb.png", fullPage: true });
  });
});
