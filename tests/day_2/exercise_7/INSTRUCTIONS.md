  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   _____ ___ ___ 
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /_ _|_ _|_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / | | | | | | 
                    |___/_\_\___|_| \__|_/__/\___|   \_/ |___|___|___|
                                                   
                                                            
# Day 2 – Exercise 8: 
## Goals:
    - Evaluate the test cases provided, and determine which is the best candidate for automation. 
    - Use the CodeGen tool to automate the test case. 

## TC1: Verify CVR number
    GIVEN the user is on the "Home" page
    THEN the CVR number on the bottom of the page is "26268788"

## TC2: Display of Test Manager courses
    GIVEN the user is on the "Home" page
    WHEN the user searches for "Test Manager" in the search field
    THEN Test Manager courses should appear in the dropdown

## TC3: News items displayed and sorted correctly
    GIVEN the user hovers over the "OM OS" button
    AND the user selects the button "Nyheder"
    THEN a list of news items should be shown
    AND the list should be sorted in descending order (latest first)

## TC4: Verify each navbar link is working
    GIVEN the user is on the "Home" page
    WHEN the user selects each menu item
    THEN the user should be navigated to each page

## Instructions:
    1. Under the 'TESTING' sidebar item, use the "Record New" button
    2. Navigate to https://et.testhuset.dk
    3. Try and automate your selected test case.
    4. Write down why you selected the chosen test case
    5. Write down any complications you might have encountered during the automation.