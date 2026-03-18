# SauceDemo.com BDD Automation Framework (Focus 2 Assessment)
===========================================================

This repository contains a professional automated test suite for SauceDemo, developed using Playwright and playwright-bdd. The project demonstrates a robust implementation of Behavior-Driven Development (BDD) using the Page Object Model (POM) architectural pattern.

## 🎯 What This Framework Tests
----------------------------

This test suite automates the core user journeys for the SauceDemo e-commerce platform based on specific User Stories:

1.  **User Story 1: Secure Login**
    
    *   Verifies that a user can successfully log in with valid credentials (standard\_user).
        
    *   Asserts successful redirection to the product catalog and visibility of products.
        
2.  **User Story 2: End-to-End Purchase Flow**
    
    *   **Cart Management:** Verifies adding an item (e.g., "Sauce Labs Backpack") to the cart and checks the cart badge counter updates correctly.
        
    *   **Cart Verification:** Navigates to the cart page and asserts the correct item is listed.
        
    *   **Checkout Process:** Fills out shipping information (First Name, Last Name, Zip).
        
    *   **Order Completion:** Verifies the final order summary, completes the purchase, and asserts the "Thank you for your order!" confirmation message.
        

## 🏗️ Architectural Approach
--------------------------

### 1\. Behavior-Driven Development (BDD)

I utilized the playwright-bdd package to bridge Gherkin feature files with Playwright.

*   **Why?** This ensures that technical tests remain aligned with business requirements and are readable by non-technical stakeholders (Product Owners, manual testers).
    
*   **Location**: Found in the features/ and steps/ directories.
    

### 2\. Page Object Model (POM)

To ensure code reuse and high maintainability, I implemented a strict POM structure.

*   **Why?** It separates the "what" (test steps) from the "how" (selectors and actions). If the UI changes, I only need to update the Page Object file once, rather than fixing multiple test scripts.
    
*   **Location**: Found in the pages/ directory.
    

### 3\. Selector Strategy & Resiliency

*   **Readable Selectors**: I prioritized data-test attributes (e.g., \[data-test="login-button"\]) to ensure tests are resilient to changes in CSS or layout.
    
*   **Web-First Assertions**: Leveraged Playwright’s expect() library, which includes automatic retries to prevent "flaky" tests.
    

## 🛠️ Installation & Setup
------------------------

### Prerequisites

*   Node.js (v18 or higher recommended)
    
*   Git
    

### Setup Instructions

1.  git clone \[https://github.com/Quasem/assessment-2-saucedemo.git\](https://github.com/Quasem/assessment-2-saucedemo.git)
    
2.  cd assessment-2-saucedemo
    
3.  npm install
    
4.  npx playwright install
    

🏃 Running the Tests
--------------------

## The framework requires a generation step to sync Gherkin features with Playwright tests.

1.  npx bddgen
    
2.  npx playwright test
    
3.  npx playwright show-report
    

## 📂 Project Structure
--------------------

*   features/ (Gherkin User Stories)
    
*   pages/ (Page Objects: Selectors & Logic)
    
*   steps/ (Step Definitions: Glue code)
    
*   .features-gen/ (Auto-generated Playwright tests)
    
*   playwright.config.js (Master Framework Configuration)
    
*   package.json (Dependencies & Scripts)
    

## 👥 Reviewer Notes
-----------------

In accordance with the assessment guidelines, this repository includes a history of meaningful commits. This code has been reviewed to ensure it follows the standards for modern automation engineering.

