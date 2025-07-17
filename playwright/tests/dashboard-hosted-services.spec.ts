import { test, expect } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

test.use({
  storageState: 'auth.json'
});

test('GeoHosting: Dashboard flows + screenshots', async ({ page }) => {
  // Navigate to home
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  // Dashboard button snapshot (goes to docs/src/dashboard/img/)
  const dashBtn = page.getByRole('button', { name: 'Dashboard' });
  await dashBtn.waitFor();
  await saveScreenshot({
    page,
    name: 'dashboard-img-1.png',
    pathSegments: ['dashboard'],
    target: dashBtn,
    fullPage: false,
    padding: 20,
  });
  // Full page dashboard section
  await dashBtn.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: 'Hosted Services' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'dashboard-img-2.png',
    pathSegments: ['dashboard'],
    fullPage: true,
  });

  // Hosted Services page (docs/src/dashboard/img/)
  await expect(page.getByRole('heading', { name: 'Hosted Services' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'hosted-services-img-1.png',
    pathSegments: ['dashboard'],
  });

  // Orders page (docs/src/dashboard/img/)
  await page.getByText('Orders').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'orders-img-1.png',
    pathSegments: ['dashboard'],
  });

  // Support page (docs/src/dashboard/supports/img/)
  await page.getByText('Support').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: 'Support' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'support-img-1.png',
    pathSegments: ['dashboard', 'supports'],
  });

  // Create Issue button snapshot
  // This button is on the Support page
  const issueBtn = page.getByRole('button', { name: 'Create Issue' });
  await issueBtn.waitFor();
  await saveScreenshot({
    page,
    name: 'create-img-1.png',
    pathSegments: ['dashboard', 'supports'],
    target: issueBtn,
    fullPage: false,
    padding: 20,
  });

  // Profile page (docs/src/dashboard/profile/img/)
  await page.getByText('Profile').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'avatar' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'profile-img-1.png',
    pathSegments: ['dashboard', 'profile'],
  });
});
