import { test, expect } from "@playwright/test";

test("Exercise 3 - Filling out the forms", async ({ page }) => {
  // TODO: Create for each input field on the page, don't forget the two buttons!
  // HINT: Use page.locator('your-selector-here')

  // const inputNumber =
  // const inputText =
  // const inputPassword =
  // const inputDate =
  // const outputNumber =
  // const outputText =
  // const outputPassword =
  // const outputDate =
  // const displayInputsBtn =
  // const clearInputsBtn =

  await test.step("Navigate to page", async () => {
    // TODO: Navigate to https://practice.expandtesting.com/inputs
    // TODO: wait for the page to load
  });

  await test.step("Fill the inputs and press the display inputs button", async () => {
    // TODO: Use the fill function to write the correct type into each field
  });

  await test.step("Validate the output fields and take screenshot", async () => {
    // TODO: Create 3 assertions to verify that the output fields contain the same values as the input fields
    // TODO: Take a screenshot and save it to 'screenshots/day1_exercise3.png'
    // HINT: Use a "toHave" assertion
  });

  await test.step("Clear the inputs", async () => {
    // TODO: Press the "Clear Inputs" button
  });
});
