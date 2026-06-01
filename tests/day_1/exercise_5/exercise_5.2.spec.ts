import { test, expect, Page } from "@playwright/test";

export enum AlertTopic {
  Support = "support",
  Billing = "billing",
  Feedback = "feedback",
  Other = "other",
}

export enum Clearance {
  Bravo = "1: 'bravo'",
  Delta = "3: 'delta'",
}

async function selectClearances(page: Page, ...clearances: Clearance[]) {
  await page.getByTestId("contact-clearances").selectOption(clearances.map((value) => ({ value })));
}

test("Exercise 5.2 (DSB): configure a service alert", async ({ page }) => {
  const baseUrl = "https://stormeal.github.io/lecture-page/test-site";
  const nameInput = page.getByTestId("contact-name");
  const emailInput = page.getByTestId("contact-email");
  const messageInput = page.getByTestId("contact-message");
  const submitBtn = page.getByTestId("contact-submit");
  const namePreview = page.getByTestId("preview-name");
  const emailPreview = page.getByTestId("preview-email");
  const topicPreview = page.getByTestId("preview-topic");
  const priorityPreview = page.getByTestId("preview-priority");
  const clearancesPreview = page.getByTestId("preview-clearances");
  const newsletterPreview = page.getByTestId("preview-newsletter");
  const conditionsPreview = page.getByTestId("preview-terms");
  const successToast = page.getByTestId("submit-success");
  const priorityHigh = page.getByTestId("contact-priority").getByTestId("priority-high");
  const topicSelect = page.getByTestId("contact-topic");
  const newsletterCheckbox = page.locator("#newsletter");
  const conditionsCheckbox = page.getByTestId("contact-accept-terms");

  await test.step("Navigate to the DSB operations form", async () => {
    await page.goto(`${baseUrl}/input-forms`);
  });

  await test.step("Enter service alert details", async () => {
    await nameInput.fill("DSB Passenger Operations");
    await emailInput.pressSequentially("operations@dsb.dk");
    await messageInput.pressSequentially(
      "Track change at Copenhagen Central. Passengers for Odense should monitor platform announcements.",
      { delay: 10 },
    );
  });

  await test.step("Configure topic and urgency", async () => {
    await topicSelect.selectOption(AlertTopic.Support);
    await priorityHigh.check();
  });

  await test.step("Configure clearances and notifications", async () => {
    await selectClearances(page, Clearance.Bravo, Clearance.Delta);
    await newsletterCheckbox.check();
    await conditionsCheckbox.check();
  });

  await test.step("Submit the DSB alert", async () => {
    await submitBtn.click();
  });

  await test.step("Verify the configured alert preview", async () => {
    await expect(namePreview).toHaveText("DSB Passenger Operations");
    await expect(emailPreview).toHaveText("operations@dsb.dk");
    await expect(topicPreview).toHaveText("support");
    await expect(priorityPreview).toHaveText("high");
    await expect(clearancesPreview).toHaveText("bravo, delta");
    await expect(newsletterPreview).toHaveText("Yes");
    await expect(conditionsPreview).toHaveText("Accepted");
    await expect(successToast).toBeVisible();
  });

  await test.step("Capture mission evidence", async () => {
    await page.screenshot({ path: "screenshots/day1_ex5_2_dsb.png", fullPage: true });
  });
});
