import { Page, Locator } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs/promises';
import { DOC_SRC } from '../playwright.config';

/**
 * Options for saving a screenshot.
 */
export interface ScreenshotOptions {
  /** Playwright Page instance */
  page: Page;
  /** Filename for the image (e.g., "dashboard.png") */
  name: string;
  /** Path segments under docs/src (e.g., ["dashboard", "support"]) */
  pathSegments?: string[];
  /** Locator for an element-only screenshot; omit for full-page */
  target?: Locator;
  /** Whether to capture full page when no target is provided */
  fullPage?: boolean;
  /** Padding in pixels around the element when using Locator */
  padding?: number;
}

/**
 * Saves a screenshot to docs/src/.../img/name
 * If pathSegments is provided, it determines the directory under docs/src.
 * Otherwise defaults to [] (writing to docs/src/img).
 */
export async function saveScreenshot(opts: ScreenshotOptions) {
  const {
    page,
    name,
    pathSegments = [],
    target,
    fullPage = true,
    padding = 0,
  } = opts;

  // Build output directory under docs/src/<...segments>/img
  const imgDir = path.join(
    DOC_SRC,
    ...pathSegments,
    'img'
  );
  await fs.mkdir(imgDir, { recursive: true });
  const dest = path.join(imgDir, name);

  // Element screenshot with optional padding
  if (target) {
    if (padding > 0) {
      const box = await target.boundingBox();
      if (!box) throw new Error('Element not found for screenshot');
      const x = Math.max(0, box.x - padding);
      const y = Math.max(0, box.y - padding);
      const width = box.width + padding * 2;
      const height = box.height + padding * 2;
      await page.screenshot({ path: dest, clip: { x, y, width, height } });
      return;
    }
    // No padding: screenshot just the element
    await target.screenshot({ path: dest });
    return;
  }

  // Full-page screenshot
  await page.screenshot({ path: dest, fullPage });
}
