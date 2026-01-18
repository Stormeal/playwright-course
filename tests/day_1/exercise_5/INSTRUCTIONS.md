  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   __
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / 
                    |___/_\_\___|_| \__|_/__/\___|   \_/  
                                                        
# Day 1 – Exercise 5: Let’s Create a Note!

## Prerequisites
    - Go to https://practice.expandtesting.com/notes/app/register and create a test account
    - You do NOT need to verify your email
    - Do not use a personal email or password – this is a test account
    - You will reuse these credentials in later exercises

## Goals
    - Work with more advanced UI interactions
    - Use all Playwright techniques learned so far
    - Write multiple Playwright tests
    - Use a Page Object to encapsulate logic
    - Practice cleanup of test data

## Instructions
This exercise must be implemented using **Playwright Test** (`@playwright/test`).

    1. Open `exercise_5.spec.ts`
    2. Complete the test named **"Login to note app"**
        - Navigate to the notes application
        - Log in using your test account credentials
        - Assert that login was successful
    3. Complete the test named **"Create new note"**
        - Instead of repeating the login steps, use the `login()` function from `notes-page.ts`
    4. Create a new note
        - All required locators already exist in the page object
        - Use them to create a note with a unique title
    5. Verify the note was created
        - Filter notes by title
        - Assert that exactly one note with that title exists
    6. Clean up after the test
        - Delete the note you just created

## Definition of Done
    - Login test passes
    - Note creation test passes
    - Assertions confirm the note exists
    - The created note is deleted at the end of the test
    - No test data is left behind

## Hints
### 1. Logging in (first test)
- Use `page.goto(...)` to open the login page (or the app landing page).
- Prefer semantic locators when possible:
  - Email input: `page.getByRole('textbox', { name: /email/i })`
  - Password input: `page.getByRole('textbox', { name: /password/i })`
  - Login button: `page.getByRole('button', { name: /login/i })`
- After clicking **Login**, assert something that confirms a successful login, for example:
  - A heading like **Notes**
  - A **Logout** button
  - A URL change to the notes app

---

### 2. Using the Page Object `login()` function
- In the **"Create new note"** test, do **not** repeat the login steps.
- Import the page object from `notes-page.ts`.
- Instantiate it with the Playwright `page` fixture.
- Call the `login()` function instead of re-implementing login logic.

---

### 3. Creating a unique note title
- Use a unique title to avoid conflicts with existing notes.
- A simple approach is to include a timestamp:
  - Example: `pw-note-${Date.now()}`
- This makes assertions and cleanup more reliable.

---

### 4. Creating the note
- All required locators are already defined in the page object.
- Use the existing locators to:
  - Fill in the note title
  - Fill in the note content
  - Select any required options
  - Save the note
- Focus on calling `fill()` and `click()` in a clear sequence.

---

### 5. Verifying the note was created
- Locate the note using its title.
- If the UI supports searching or filtering, use it.
- To verify that only one note exists with that title:
  - Assert the locator count:
    - `await expect(locator).toHaveCount(1)`

---

### 6. Cleaning up after the test (delete the note)
- Locate the note you just created (by title).
- Open the note or its menu.
- Click **Delete** and confirm if needed.
- After deletion, assert that the note no longer exists:
  - `toHaveCount(0)` or `not.toBeVisible()`

---

### 7. Stability tips
- Avoid `waitForTimeout` whenever possible.
- Prefer waiting for UI signals, such as:
  - An element becoming visible
  - A note appearing in the list
  - A confirmation message
- Assertions like `await expect(locator).toBeVisible()` are usually enough.