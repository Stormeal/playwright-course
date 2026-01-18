  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _           _____  __
                    | __|_ _____ _ _ __(_)___ ___  |_ _\ \/ /
                    | _|\ \ / -_) '_/ _| (_-</ -_)  | | >  < 
                    |___/_\_\___|_| \__|_/__/\___| |___/_/\_\
                                           
                                                        
# Day 2 – Exercise 9: Introduction to Cucumber with Playwright
In this exercise, you will be introduced to **Cucumber** and the **Gherkin syntax**.

Instead of writing tests directly in TypeScript, you will describe test behavior in a **human-readable format** and connect those steps to Playwright code.
This approach is commonly used in **Behavior-Driven Development (BDD)** and helps bridge the gap between technical and non-technical stakeholders.

## Prerequisites
    - Cucumber extension installed in VS Code
    - Completed Exercise 3 (UI test using Playwright)
    - Basic understanding of:
        - Playwright tests
        - Page Object Model
        - Test flows

## Goals
    - Get familiar with Cucumber and Gherkin syntax
    - Understand the relationship between:
        - Feature files
        - Step definitions
        - World & hooks
    - Reimplement an existing Playwright test using Cucumber
    - Reuse existing Page Objects and Flows

## Exercise 9 – Converting a Playwright Test to Cucumber
In this exercise, you will take the test you created in **Exercise 3** and rewrite it using **Cucumber**.

Instead of a Playwright test file, you will:
    - Describe the scenario using Gherkin
    - Implement step definitions in TypeScript
    - Reuse existing Page Objects and Flows

## Instructions
1. Create a Feature File
    - Create a new feature file (e.g. `exercise9.feature`)
    - Use the **Gherkin syntax**:
    - `Feature`
    - `Scenario`
    - `Given`, `When`, `Then`

Describe the same user flow you automated in Exercise 3.

2. Write Step Definitions
    - Create a corresponding step definition file (e.g. `exercise9.steps.ts`)
    - Map each Gherkin step to Playwright code
    - Keep steps **high-level and readable**
    - Avoid technical details in the feature file
    
3. Use the Custom World
    - Use the provided custom `World` to:
        - Access the Playwright `page`
        - Share state between steps
    - Do not create a browser or page manually inside steps

4. Reuse Existing Code
    - Reuse your existing:
        - Page Objects
        - Flows
    - Do **not** duplicate selectors or logic inside step definitions

5. Hooks and Setup
    - Use Cucumber hooks to:
        - Launch the browser
        - Create and close the page
        - Perform cleanup if needed

6. Run the Scenario
    - Execute the Cucumber test using the provided npm command
    - Ensure the scenario passes from start to finish

## Definition of Done
    - A `.feature` file exists and is readable by non-technical users
    - Step definitions correctly map to Gherkin steps
    - Existing Page Objects and Flows are reused
    - The scenario runs successfully using Cucumber
    - No browser or page setup is done inside step files

## 💡 Hints
    - Feature files should describe **what** happens, not **how**
    - Step definitions contain the technical implementation
    - Keep steps reusable and generic
    - If a step becomes too technical, it probably belongs in a Flow or Page Object
    - Use hooks for setup and teardown, not steps

## 🔥 Hard Challenge (optional)

If you finish early, try one or more of the following:

    - Add another scenario to the same feature file
    - Parameterize steps using Scenario Outlines
    - Improve step reusability by generalizing wording
    - Add tags (e.g. `@smoke`, `@regression`) and run scenarios selectively
    - Refactor step definitions to reduce duplication