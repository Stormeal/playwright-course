  _____         _   _   _                _   
 |_   _|__  ___| |_| | | |_   _ ___  ___| |_ 
   | |/ _ \/ __| __| |_| | | | / __|/ _ \ __|
   | |  __/\__ \ |_|  _  | |_| \__ \  __/ |_ 
   |_|\___||___/\__|_| |_|\__,_|___/\___|\__|
                    ___                _          __   _____ ___ 
                    | __|_ _____ _ _ __(_)___ ___  \ \ / /_ _|_ _|
                    | _|\ \ / -_) '_/ _| (_-</ -_)  \ V / | | | | 
                    |___/_\_\___|_| \__|_/__/\___|   \_/ |___|___|
                                                                
                                                            
# Day 1 – Exercise 7: Create a Note with an Authenticated API
In this exercise, you will take your API testing one step further by working with **authentication**.

You will:
- Log in to an API
- Extract an authentication token from the response
- Use that token to access a **protected endpoint**


## Prerequisites
    - Completed Exercise 6 (API Health Check)
    - Playwright Test installed and working
    - Basic understanding of:
      - HTTP methods (GET, POST)
      - JSON request and response bodies
      - Playwright’s `request` fixture

## Goals
    - Authenticate against a REST API
    - Extract and reuse an authentication token
    - Call a protected endpoint using authentication
    - Make meaningful assertions on API responses

## Exercise 7 – Authenticated API Requests

Your task is to authenticate with the API and then use the returned token to call a protected endpoint.

You will:
1. Log in using valid credentials
2. Extract the authentication token from the response
3. Use that token to access the `/notes` endpoint
4. Validate that the API behaves as expected

## Instructions
    1. Use Playwright’s built-in `request` fixture to send HTTP requests.
    2. Authenticate with the API by sending a **POST** request to:
    3. Extract the JSON body from the login response and store it in a variable.
    4. Retrieve the authentication token from the response.
    5. Call the protected endpoint:
      - Pass the token as part of the request (e.g. using headers).
    6. Add assertions to verify:
      - The login request was successful
      - The token exists
      - The `/notes` endpoint returns the expected response
    7. Optionally log useful data using the shared `logger` to help with debugging.
    
## Definition of Done
    - Authentication request completes successfully
    - An authentication token is extracted from the response
    - The protected `/notes` endpoint is accessed using the token
    - Assertions validate the API responses
    - The test passes without errors

## Hints
    - Authentication tokens are commonly sent using request headers
    - `response.ok()` can be used to quickly verify request success
    - Always parse JSON responses using `response.json()`
    - Logging responses can help you understand the API structure before asserting

## 🔥 Hard Challenge (optional)
If you want to push yourself further:

    - Add a negative test:
    - Try calling `/notes` without a token
    - Assert that the request fails correctly
    - Validate the structure of the notes response (array, object keys, etc.)
    - Store the authentication logic in a helper function for reuse
    - Group related authentication tests using `test.describe`