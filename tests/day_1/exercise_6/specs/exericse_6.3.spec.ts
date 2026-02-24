import { test, expect } from "@playwright/test";

test("Exercise 6.3 - Authorized Access Validation (Profile + Cleanup)", async ({ request }) => {
  const baseURL = "https://practice.expandtesting.com/notes/api/";
  const email = `redteam+${Date.now()}@example.com`;
  const password = "123456";
  const name = "Red Team Analyst";

  let token = "";

  await test.step("Register a new user", async () => {
    const response = await request.post(`${baseURL + "users/register"}`, {
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
      },
      form: { name, email, password },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
      }),
    );
  });

  await test.step("Login and extract token", async () => {
    const response = await request.post(`${baseURL + "users/login"}`, {
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
      },
      form: { email, password },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
        data: expect.any(Object),
      }),
    );

    token = body?.data?.token ?? "";
    expect(token).toBeTruthy();
  });

  await test.step("Call protected profile endpoint with token", async () => {
    const response = await request.get(`${baseURL + "users/profile"}`, {
      headers: {
        accept: "application/json",
        "x-auth-token": token,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
        data: expect.any(Object),
      }),
    );

    expect(body?.data?.email).toBe(email);
  });

  await test.step("Cleanup: delete created user", async () => {
    const response = await request.delete(`${baseURL + "users/delete-account"}`, {
      headers: {
        accept: "application/json",
        "x-auth-token": token,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
      }),
    );
  });
});
