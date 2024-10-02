@login
Feature: User Login
  As a user of the mobile application
  I want to log in using my credentials
  So that I can access the app's features

  Background:
    Given I open the app

  @positive
  Scenario: TC_01 Successful login with valid credentials
    When I enter credentials for "STANDARD"
    And I click the login button
    Then I should see the dashboard

  @negative
  Scenario Outline: TC_02 Failed login with "<userType>" account type
    When I enter credentials for "<userType>"
    And I click the login button
    Then I should see an error message for "<userType>" user

    Examples:
      | userType        |
      | LOCKED          |
      | NO_MATCH        |
      | NO_USER_DETAILS |
      | NO_PASSWORD     |
