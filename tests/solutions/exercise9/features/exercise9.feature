Feature: Exercise 9 - Validate Playwright Course
    As a great Playwright practioneer
    I want to navigate to the Playwright Course
    So I can validate that it has the correct price and title

  Background:
    Given the user is on the Testhuset homepage
    And the user has accepted the dialog button if it appears

  Scenario: Validate Playwright course information
    When the user presses the Kursus button
    And the user clicks the course Automatisering med Playwright
    Then the title should be Automatisering med Playwright
    And the price should be 10.499 kr.
