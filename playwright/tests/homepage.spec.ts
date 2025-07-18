// playwright-docs/tests/homepage.spec.ts
import { test, expect } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

test('GeoHosting home page loads', async ({ page }) => {
  // Navigate & sanity check
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle(/geo/i);

  // Capture full-page screenshot under docs/src/img/GHS_home.png
  await saveScreenshot({
    page,
    name: 'GHS_home.png',
    fullPage: true,
  });
});
