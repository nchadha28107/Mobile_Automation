import { Selector } from 'webdriverio';

class Action {
    async isDisplayed(selector: Selector): Promise<boolean> {
        const element = await $(selector);
        return await element.isDisplayed();
    }

    async click(selector: Selector): Promise<void> {
        const element = await $(selector);
        if (await this.isDisplayed(selector)) {
            await element.click();
        } else {
            throw new Error('Element is not visible');
        }
    }

    async setValue(selector: Selector, value: string): Promise<void> {
        const element = await $(selector);
        if (await this.isDisplayed(selector)) {
            await element.setValue(value);
        } else {
            throw new Error('Element is not visible');
        }
    }

    async getText(selector: Selector): Promise<String> {
        const element = await $(selector);
        return await element.getText();
    }
}

export const action = new Action();