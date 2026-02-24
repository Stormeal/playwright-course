import { test, type APIResponse } from "@playwright/test";

type CheckStepOptions = {
  response?: APIResponse; // if provided, we can print API diagnostics on fail
  logPass?: boolean; // default true for your students
  dumpBodyOnFail?: boolean; // default true
};

export async function checkStep(name: string, fn: () => Promise<void> | void, opts: CheckStepOptions = {}) {
  const { response, logPass = true, dumpBodyOnFail = true } = opts;

  await test.step(name, async () => {
    try {
      await fn();

      if (logPass) {
        console.log(`✅ ${name}`);
      }
    } catch (err) {
      console.error(`❌ ${name}`);

      if (response) {
        console.error(`   ↳ Status: ${response.status()}`);

        try {
          const headers = response.headers();
          console.error(`   ↳ Content-Type: ${headers["content-type"] ?? "<missing>"}`);
        } catch {
          // ignore
        }

        if (dumpBodyOnFail) {
          try {
            const text = await response.text();
            const trimmed = text.length > 2000 ? `${text.slice(0, 2000)}…(truncated)` : text;
            console.error(`   ↳ Body: ${trimmed}`);
          } catch {
            // ignore
          }
        }
      }

      throw err; // keep Playwright failure behavior
    }
  });
}
