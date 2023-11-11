import { test, expect } from '@playwright/test';

test('very slow test', async ({ page }) => {
    test.setTimeout(3000);
  await page.goto('https://jobmenia.xyz/register-login/#jh-login-tab-content');
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('process.env');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('process.env');
  await page.goto('https://jobmenia.xyz/');
  await page.getByRole('link', { name: 'Freelance Job 2 open positions' }).click();
  await page.getByRole('link', { name: 'CONDUENT Remote Data Entry Specialist CONDUENT  Remote Full Time 2 days ago' }).click();
  await page.getByRole('button', { name: 'Apply for job' }).click();
  });
