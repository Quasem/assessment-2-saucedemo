Feature: SauceDemo Purchase Flow

  Background:
    Given I am on the login page

  Scenario: User Story 1 - Secure Login
    When I login with valid credentials "standard_user" and "secret_sauce"
    Then I should be redirected to the product catalog page
    And I should see the product listings

  Scenario: User Story 2 - Complete a purchase
    Given I login with valid credentials "standard_user" and "secret_sauce"
    When I add the "Sauce Labs Backpack" to the cart
    Then the shopping cart icon should show "1"
    
    When I click the shopping cart icon
    Then I should be navigated to the "Your Cart" page
    And I should see the "Sauce Labs Backpack" listed in my cart
    
    When I click the "Checkout" button
    And I enter shipping info: "John", "Doe", "12345"
    And I click "Continue"
    And I click "Finish"
    Then I should see the confirmation message "Thank you for your order!"