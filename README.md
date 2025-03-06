# Testing Duolingo Android App with Appetize & Playwright

I created this project to test the Duolingo Android app using Playwright and Appetize. I learned about this setup from [this video](https://www.youtube.com/watch?v=OOBjzIyiW0Y), but instead of using Appetize's test recorder, I used it to help me find the right elements to click and interact with in the app.

## What This Test Does

This test shows how a new user would use the Duolingo app for the first time. It tests:
- Opening the app
- Picking a language to learn
- Setting up user preferences
- Allowing notifications
- Choosing a learning path

I used Playwright's `waitForElement` and `expect` commands to check if things appear on screen before clicking them. Sometimes I had to add small delays because the app moves very quickly between screens.

## Demo Video

Here's a video showing the tests in action:

![Demo Video](./assets/ScreenRecording.mov)

## How to Set Up

1. Make sure you have Node.js 18 or newer installed
2. Download this project to your computer
3. Open your terminal and install the needed packages:
```bash
npm install
```
4. Set up Playwright:
```bash
npx playwright install
```

## Setting Up Appetize

1. Sign up for an account at [Appetize.io](https://appetize.io)
2. Upload the Duolingo app (.apk file) to your account
3. Find your public key in your Appetize dashboard
4. Create a file named `.env` and add your key like this:
```
PUBLIC_KEY=your_appetize_public_key_here
```

Want to learn more about Appetize? Check out their [help pages](https://docs.appetize.io/).

## Test Details

I ran my tests on:
- Phone type: Pixel 7
- Android version: 13.0

You can change these settings in the `playwright.config.ts` file if you want to test on different devices.

## Running the Tests

To run the tests, type this in your terminal:
```bash
npm run test
```

## How the Tests Work

The tests:
- Find buttons and text using IDs and labels in the app
- Wait for things to appear on screen before clicking
- Handle permission popups (like allowing notifications)
- Check if the right screens appear at the right time


## Helpful Links

- [Appetize Help Pages](https://docs.appetize.io/)
- [Playwright Help Pages](https://playwright.dev/docs/intro)
- [How to Use Appetize with JavaScript](https://docs.appetize.io/javascript-sdk/playwright)
