import { test, expect } from "@playwright/test";

test("Exercise 6.1 - Red Team Recon (Health Check)", async ({ request }) => {
  const response = await request.get("https://practice.expandtesting.com/api/health-check");

  await test.step("Assert status is successful", async () => {
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBeGreaterThanOrEqual(200);
    expect(response.status()).toBeLessThan(300);
  });

  await test.step("Assert Content-Type indicates JSON", async () => {
    const headers = response.headers();
    expect(headers["content-type"]).toContain("application/json");
  });

  await test.step("Parse JSON and validate stable contract fields", async () => {
    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        status: expect.any(String),
        message: expect.any(String),
      }),
    );
  });
});
