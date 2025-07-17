// playwright-docs/tests/g3w-page.spec.ts
import { test, expect } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

test.use({
  storageState: 'auth.json',
});

test('G3W page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('img').nth(1)).toBeVisible();
  await expect(page.locator('#root')).toContainText(
    'Professional GeoSpatial hosting for open-source GIS web applications.'
  );
  await expect(page.getByRole('img', { name: 'G3W' })).toBeVisible();

  // Click the "Publish your QGIS projects" button
  await page
    .getByRole('listitem')
    .filter({ hasText: 'G3WPublish your QGIS projects' })
    .getByRole('button')
    .click();

  await expect(page.locator('h1')).toContainText('G3W Hosting');
  await page.waitForLoadState('domcontentloaded');

  // Screenshot the full page under docs/src/img/subscription-img-2.png
  await saveScreenshot({
    page,
    name: 'subscription-img-2.png',
    fullPage: true,
  });
});
