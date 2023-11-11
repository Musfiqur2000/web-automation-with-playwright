import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('process.env');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('process.env');
  await page.getByRole('button', { name: 'Login' }).click();

});
