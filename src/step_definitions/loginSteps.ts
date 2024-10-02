import { Given, When, Then } from '@cucumber/cucumber';
import * as assert from 'assert';
import { APP_CONFIG } from '../constants/constants';
import { loginPage } from '../pages/LoginPage';
import testData from '../data/testData.json';
import errorMessages from '../data/errorMessages.json';
type ErrorMessage = keyof typeof errorMessages;
type UserType = keyof typeof testData;

Given('I open the app', async function () {
    await browser.setTimeout({ 'implicit': 60000 });
    try {
        await driver.terminateApp(APP_CONFIG.packageName);
    } finally {
        await driver.activateApp(APP_CONFIG.packageName);
    }
});

When('I enter credentials for {string}', async function (userType: string) {
    const typedUserType = userType as UserType;
    const { username, password } = testData[typedUserType];
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
});

When('I click the login button', async function () {
    await loginPage.clickLogin();
});

Then('I should see the dashboard', async function () {
    const isLoggedIn = await loginPage.isLoggedIn();
    assert.strictEqual(isLoggedIn, true, 'User should be logged in and see the welcome message');
});

Then('I should see an error message for {string} user', async (userType: string) => {
    const isErrorDisplayed = await loginPage.isErrorDisplayed();
    const errorMessage = await loginPage.getErrorMessage();
    const typedUserType = userType as ErrorMessage;
    assert.strictEqual(isErrorDisplayed, true, `Error message for ${userType} user should be displayed`);
    assert.strictEqual(errorMessage, errorMessages[typedUserType], `Error message for ${userType} user should is Incorrect`);
});