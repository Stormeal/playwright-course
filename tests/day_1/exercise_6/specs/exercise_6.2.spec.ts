import { test, expect } from "@playwright/test";
import { logger } from "../../../utils/logger";

test("Exercise 6.2 - Authentication Verification (Register + Login)", async ({ request }) => {
  const email = `redteam+${Date.now()}@example.com`;
  const password = "123456";
  const name = "Red Team Analyst";

  let token = "";

  const maskToken = (value: string) => {
    if (!value) return "";
    if (value.length <= 12) return "***";
    return `${value.slice(0, 6)}...${value.slice(-4)}`;
  };

  const json = (value: unknown) => JSON.stringify(value, null, 2);

  logger.info("=== Test start ===");
  logger.info(`Generated user: ${json({ name, email })}`);

  try {
    await test.step("Register a new user", async () => {
      logger.info("[Register] Sending request...");
      logger.info(`[Register] POST /users/register form: ${json({ name, email, password })}`);

      const response = await request.post("https://practice.expandtesting.com/notes/api/users/register", {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
        form: {
          name,
          email,
          password,
        },
      });

      logger.info(`[Register] Response status: ${response.status()} ${response.statusText()}`);
      logger.info(`[Register] Response ok?: ${response.ok()}`);

      expect(response.ok()).toBeTruthy();

      const body = await response.json();
      logger.info(`[Register] Response body:\n${json(body)}`);

      // Stable contract checks (avoid full payload matching)
      expect(body).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
          message: expect.any(String),
        }),
      );
    });

    await test.step("Login and extract token", async () => {
      logger.info("[Login] Sending request...");
      logger.info(`[Login] POST /users/login form: ${json({ email, password })}`);

      const response = await request.post("https://practice.expandtesting.com/notes/api/users/login", {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
        },
        form: {
          email,
          password,
        },
      });

      logger.info(`[Login] Response status: ${response.status()} ${response.statusText()}`);
      logger.info(`[Login] Response ok?: ${response.ok()}`);

      expect(response.ok()).toBeTruthy();

      const body = await response.json();
      logger.info(`[Login] Response body:\n${json(body)}`);

      // Stable contract checks
      expect(body).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
          message: expect.any(String),
          data: expect.any(Object),
        }),
      );

      token = body?.data?.token ?? "";
      logger.info(`[Login] Extracted token length: ${token.length}`);
      logger.info(`[Login] Extracted token (masked): ${maskToken(token)}`);

      expect(token).toBeTruthy();
    });

    await test.step("Token is available for later exercises", async () => {
      logger.info("[Token] Verifying token length...");
      logger.info(`[Token] Token length: ${token.length}`);
      expect(token.length).toBeGreaterThan(0);
    });

    logger.info("=== Main flow complete ===");
  } finally {
    await test.step("Cleanup - delete account (strict)", async () => {
      logger.info("[Cleanup] Starting cleanup...");
      logger.info(`[Cleanup] Token present?: ${Boolean(token)}`);
      logger.info(`[Cleanup] Token length: ${token.length}`);
      logger.info(`[Cleanup] Token (masked): ${maskToken(token)}`);

      // Strict means: if we cannot authenticate, the test must fail
      expect(token).toBeTruthy();

      logger.info("[Cleanup] Sending request...");
      logger.info("[Cleanup] DELETE /users/delete-account with header: x-auth-token: <masked>");

      const response = await request.delete("https://practice.expandtesting.com/notes/api/users/delete-account", {
        headers: {
          accept: "application/json",
          "x-auth-token": token,
        },
      });

      logger.info(`[Cleanup] Response status: ${response.status()} ${response.statusText()}`);
      logger.info(`[Cleanup] Response ok?: ${response.ok()}`);

      expect(response.ok()).toBeTruthy();

      const body = await response.json();
      logger.info(`[Cleanup] Response body:\n${json(body)}`);

      // Swagger "Success" response contract
      expect(body).toEqual(
        expect.objectContaining({
          success: expect.any(Boolean),
          status: expect.any(Number),
          message: expect.any(String),
        }),
      );

      logger.info(`[Cleanup] success field: ${String(body?.success)}`);
      expect(body.success).toBe(true);

      logger.info("[Cleanup] Cleanup complete.");
    });

    logger.info("=== Test end ===");
  }
});
