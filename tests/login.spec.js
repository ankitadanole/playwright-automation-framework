// import { test, expect } from '@playwright/test';

// test('login to saucedemo', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');
//   await page.click('#login-button');

//   await expect(page).toHaveURL(/inventory/);
// });
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});