import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('@regression invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test('@regression locked user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    loginData.lockedUser.username,
    loginData.lockedUser.password
  );

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});