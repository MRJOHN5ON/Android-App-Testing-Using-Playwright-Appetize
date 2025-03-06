import { defineConfig } from '@playwright/test';
import { AppetizeTestOptions } from '@appetize/playwright';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<AppetizeTestOptions>({
    testDir: './tests',
    outputDir: 'test-results/',
    timeout: 180 * 1000,
    expect: {
        // recommended ratio for screenshot testing
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.05,
        },
    },
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    reporter: 'line',

    // correlates to number of concurrent Appetize sessions at a time
    workers: 1,
    fullyParallel: false,

    use: {
        trace: 'retain-on-failure',
        baseURL: 'https://appetize.io',

        // Appetize session configuration
        // can be overridden per test suite with test.use({ config: { ... } })
        config: {
            publicKey: process.env.PUBLIC_KEY,
            device: 'pixel7',
            osVersion: '13.0'
        },
    },
});
