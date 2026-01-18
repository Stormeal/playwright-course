  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   _____ 
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / | | 
                    |___/_\_\___|_| \__|_/__/\___|   \_/ |___|
                                                            
# Day 1 – Exercise 6: API Health Check with Playwright
In this exercise, you will use **Playwright’s API testing capabilities** to verify that a backend service is running correctly.

Instead of interacting with a browser, you will send a **direct HTTP request** and validate the response.  
This is a very common real-world scenario and is often used to ensure an API is available before running more advanced tests.

---

## Prerequisites
    - Node.js installed (LTS recommended)
    - Dependencies installed (`npm install`)
    - Playwright Test set up and working
    - Basic understanding of Playwright Test syntax (`test`, `expect`)

---

## Goals
    - Perform a simple API request using Playwright
    - Use the built-in `request` fixture
    - Parse and validate a JSON response
    - Use assertions to verify correct API behavior

---

## Exercise 6 – Health Check API Test
Your task is to call a **health-check endpoint** and make sure that it responds correctly.

    You will need to apply the knowledge from the previous slides to:
    - Send an HTTP request
    - Validate the response
    - Assert expected values

---

## Instructions
    1. Create a new GET request using the built-in `request` fixture:
    ```ts
    const response = await request.get(<endpoint>);
    Call the /health-check endpoint by appending it to the base URL.
    2. Call the /health-check endpoint by appending it to the base URL.
    3. Assert that the request was successful:
        • response.ok() should return true
    4. Extract the JSON body from the response
        const data = await response.json
    5. Validate that data.message contrains the expected text.
        • Use logger.info(data) if you need to inspect the full resposne

## Definition of Done
    • The /health-check endpoint is called successfully
    • The response indicates a successful request
    • The JSON body is parsed correctly
    • The expected message is validated using assertions
    • The test passes without errors

## Hints
    • The request fixture is provided automatically by Playwright Test.
    • response.ok() is a quick way to verify that the HTTP request succeeded.
    • JSON responses must be parsed using response.json().
    • Logging the response can help you understand the API structure before writing assertions.

## Hard Challenge (optional)
    If you finish the exercise quickly, try extending it:
    • Assert the HTTP status code explicitly (e.g. 200)
    • Validate that the response contains only the expected keys
    • Add a negative test:
        • Call a non-existing endpoint
        • Assert that the request fails correctly
    • Group your API tests using test.describe for better structure