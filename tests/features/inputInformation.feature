Feature: Input information on the page

    Scenario: User fills out and submits the form
        Given User is on the forms page
        When User inputs "Test" as the first name
        And User inputs "User" as the last name
        And User inputs "test.user@example.com" as the email
        And User selects "Male" as the gender
        And User inputs "3753366331" as the phone number
        And User inputs "Mathematics" as the subject
        And User selects "Sports, Reading" as hobbies
        And User inputs "123 Elm Street" as the current address
        And User taps on the submit button
        Then User sees a modal view confirming submission