import { action } from '../actions/Action';
import { LoginPageLocators } from './locators/LoginPageLocators';

class LoginPage {
    async enterUsername(username: string) {
        await action.setValue(LoginPageLocators.usernameField, username);
    }

    async enterPassword(password: string) {
        await action.setValue(LoginPageLocators.passwordField, password);
    }

    async clickLogin() {
        await action.click(LoginPageLocators.loginButton);
    }

    async isLoggedIn(): Promise<boolean> {
        return await action.isDisplayed(LoginPageLocators.welcomeMessage);
    }

    async isErrorDisplayed(): Promise<boolean> {
        return await action.isDisplayed(LoginPageLocators.errorMessage);
    }

    async getErrorMessage(): Promise<String> {
        return await action.getText(LoginPageLocators.errorMessage);
    }
}

export const loginPage = new LoginPage();