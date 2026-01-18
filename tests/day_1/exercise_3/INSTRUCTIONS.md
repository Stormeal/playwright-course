  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                      ___                _           ___ ___ ___ 
                    | __|_ _____ _ _ __(_)___ ___  |_ _|_ _|_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  | | | | | | 
                    |___/_\_\___|_| \__|_/__/\___| |___|___|___|
                                                                
                                                           

# Day 1 – Exercise 3: Making Our First Real Playwright Tests

## Goals
    - Get comfortable with the `@playwright/test` module
    - Locate and interact with input fields
    - Click buttons using Playwright locators
    - Assert that UI output matches user input

## Instructions
This exercise must be implemented using **Playwright Test** (`@playwright/test`).

    1. Navigate to  
      https://practice.expandtesting.com/inputs
    2. Wait for the page to load (for example by asserting the page title)
    3. Create locators for:
      - Each input field (excluding the date input)
      - The **Display Inputs** button
      - The **Clear Inputs** button
    4. Use `fill()` to enter appropriate values into each input field
    5. Click the **Display Inputs** button
    6. Assert that each output field displays the same value as its corresponding input
    7. Take a screenshot and save it as  
      `screenshots/day1_exercise3.png`
    8. Click the **Clear Inputs** button
    9. Assert that each input field is now empty

## ✅ Definition of Done
    - All inputs (except date) are filled
    - Displayed output matches input values
    - Inputs are successfully cleared
    - Assertions pass without timeouts
    - Screenshot is saved in the screenshots folder



