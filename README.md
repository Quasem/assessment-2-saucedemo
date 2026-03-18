# SauceDemo BDD Automation Framework (Focus 2 Assessment)

This repository contains a professional automated test suite for SauceDemo, developed using Playwright and playwright-bdd. The project demonstrates a robust implementation of Behavior-Driven Development (BDD) using the Page Object Model (POM) architectural pattern.

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- Git

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/Quasem/assessment-2-saucedemo.git](https://github.com/Quasem/assessment-2-saucedemo.git)

2. Navigate to the directory:
   '''bash
   cd assessment-2-saucedemo

3. Install dependencies:
      Bash
   npm install

4. Install Playwright Browsers:
      Bash
   npx playwright install


🏃 Running the Tests
The framework requires a generation step to sync Gherkin features with Playwright tests.

1. Generate BDD Tests:

Bash
npx bddgen

2. Execute Tests:

Bash
npx playwright test

3. View Results (HTML Report):

Bash
npx playwright show-report


📂 Project Structure
features/           (Gherkin User Stories)

pages/              (Page Objects: Selectors & Logic)

steps/              (Step Definitions: Glue code)

.features-gen/      (Auto-generated Playwright tests)

playwright.config.js (Master Framework Configuration)

package.json        (Dependencies & Scripts)


## 🏗️ Architectural Approach

### 1. Behavior-Driven Development (BDD)
I utilized the `playwright-bdd` package to bridge Gherkin feature files with Playwright. 
- **Why?** This ensures that technical tests remain aligned with business requirements and are readable by non-technical stakeholders (Product Owners, manual testers).
- **Location**: Found in the `features/` and `steps/` directories.

### 2. Page Object Model (POM)
To ensure code reuse and high maintainability, I implemented a strict POM structure.
- **Why?** It separates the "what" (test steps) from the "how" (selectors and actions). If the UI changes, I only need to update the Page Object file once, rather than fixing multiple test scripts.
- **Location**: Found in the `pages/` directory.

### 3. Selector Strategy & Resiliency
- **Readable Selectors**: I prioritized `data-test` attributes (e.g., `[data-test="login-button"]`) to ensure tests are resilient to changes in CSS or layout.
- **Web-First Assertions**: Leveraged Playwright’s `expect()` library, which includes automatic retries to prevent "flaky" tests.

