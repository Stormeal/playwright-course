  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                     ___                _           ___ 
                     | __|_ _____ _ _ __(_)___ ___  |_ _|
                     | _|\ \ / -_) '_/ _| (_-</ -_)  | | 
                     |___/_\_\___|_| \__|_/__/\___| |___|
                                                           

# Day 1 – Exercise 1: Getting Started with Playwright

## Prerequisites
- Node.js installed (LTS recommended)
- Dependencies installed (`npm install`)
- Playwright browsers installed (`npx playwright install`)

## Goals:
      - Run your first Playwright script
      - Launch a browser
      - Open a page
      - Take a screenshot

## Exercises:
   1. `exercise_1.ts`
      - Open TestHusets website (https://testhuset.dk)
      - Wait for the page to load
      - Take a screenshot and save it as `day1_exercise1`

## Definition of Done
      - The browser opens visibly
      - https://testhuset.dk loads successfully
      - A screenshot file is created on disk
      - The script exits without errors

## 🔥Hard challenge (optional): 
   Refactor your solution so it uses Playwright Test and the built-in fixtures instead of manually creating the browser and page.

   1. Create a new test file, e.g. exercise_1.spec.ts.
   2. Use test and the built-in page fixture from @playwright/test.
   3. In your test:
      - Navigate to https://testhuset.dk
      - Wait until the page has loaded
      - Verify that the page title contains the word "Testhuset" (or similar)
   4. Take a screenshot and save it as screenshots/day1_homepage.png

## Hints
   1. Launching the browser
      - You need to use Playwright’s Chromium launcher.
      - Look for something like playwright.chromium.launch(...).

   2. Creating a context and page
      - From the browser object, create a browser context, then a page.
      - Something like:
         - const context = await browser.newContext();
         - const page = await context.newPage();

   3. Opening the page
      - Use the page.goto(...) function.
      - You can tell Playwright when to consider the page “loaded” using waitUntil, e.g. 'domcontentloaded'.

   4. Taking the screenshot
      - Use page.screenshot(...).
      - Don’t forget to give it a path (e.g. 'screenshots/day1_homepage.png').
      - If you want the whole page, there is an option to capture the full page (hint: fullPage).

   5. Closing the browser
      - After everything is done, close the browser with browser.close().

   6. Running the script
      - Use the provided command in VS Code’s terminal:
      - npm run day1:ex1