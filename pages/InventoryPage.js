export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addItemToCart(itemName) {
    // Finds the specific product container and clicks its 'Add to cart' button
    const product = this.page.locator('.inventory_item', { hasText: itemName });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async navigateToCart() {
    await this.cartLink.click();
  }
}