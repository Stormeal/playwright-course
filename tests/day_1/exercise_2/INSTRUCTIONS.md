  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _           ___ ___ 
                    | __|_ _____ _ _ __(_)___ ___  |_ _|_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  | | | | 
                    |___/_\_\___|_| \__|_/__/\___| |___|___|
                                           
# Day 1: Exercise 2 - Mission Locate and Assert
## Goals:
    - Navigate around the site until you find the correct objective.
    - Locate the course 'Automatisering med Playwright'
    - Confirm that the course has the correct title and price
    - Report back with photo evidence of course

## Instructions: 
    - Use what we have learned about navigation, and navigate to the site: 'https://testhuset.dk'
    - Click on the button called 'Kursus' which should be somewhere in the navbar
    - Wait for the page to load and create a locator for the course with the name: 'Automatisering med Playwright'
    - Click on the locator you just created.
    - Assert that the title is 'Automatisering med Playwright', and create an additional assertion for the course price which should be 10499
    - Create a screen shot of your discoveries and store it under the name: 'exercise_2_mission_evidence' in the screenshot folder.

## Definition of Done
- The test navigates via the navbar
- The Playwright course page opens
- The title assertion passes
- The price assertion passes
- A screenshot is saved in the screenshots folder

## Hints:
### 1. Locator for menu item button
        You can use the page.getByRole('link', {name: 'name of button'}) to get a hold of the button. 
### 2. Locator for Playwright course
        You can use the page.locator('a:has-text("title")') locator to find the course. 
        There is no need to scroll into view. Playwright has the entire screen within its viewport. 
### 3. Assert the two values
        The title can be a little tricky, because the text itself is not unique. The subtitle includes the same typing as the title. Which means we 
        have to create a locator that looks for the header element. Maybe use the selector 'h1.hero-title'. 
        Then you can use the expect(locator()).toHaveText() function

        The price should be fairly straight forward, the span element has an attribute called data-variation-price. 
        The selector would look like this: span[data-variation-price] 

    

