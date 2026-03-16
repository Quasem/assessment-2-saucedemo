import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

const { Given, When, Then } = createBdd();

// --- Authentication Steps ---

Given('I am on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I login with valid credentials {string} and {string}', async ({ page }, user, pass) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(user, pass);
});

Then('I should be redirected to the product catalog page', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

Then('I should see the product listings', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.inventoryList).toBeVisible();
});

// --- Inventory & Cart Steps ---

When('I add the {string} to the cart', async ({ page }, itemName) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart(itemName);
});

Then('the shopping cart icon should show {string}', async ({ page }, count) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.cartBadge).toHaveText(count);
});

When('I click the shopping cart icon', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.navigateToCart();
});

Then('I should be navigated to the "Your Cart" page', async ({ page }) => {
  await expect(page).toHaveURL(/.*cart.html/);
});

Then('I should see the {string} listed in my cart', async ({ page }, itemName) => {
  const checkoutPage = new CheckoutPage(page);
  await expect(checkoutPage.getItemInCart(itemName)).toBeVisible();
});

// --- Checkout Flow Steps ---

When('I click the "Checkout" button', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkoutButton.click();
});

When('I enter shipping info: {string}, {string}, {string}', async ({ page }, fName, lName, zip) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillShippingInfo(fName, lName, zip);
});

When('I click {string}', async ({ page }, buttonName) => {
  const checkoutPage = new CheckoutPage(page);
  if (buttonName === 'Continue') {
    await checkoutPage.continueButton.click();
  } else if (buttonName === 'Finish') {
    await checkoutPage.finishButton.click();
  }
});

Then('I should see the confirmation message {string}', async ({ page }, message) => {
  const checkoutPage = new CheckoutPage(page);
  await expect(checkoutPage.completeHeader).toHaveText(message);
});