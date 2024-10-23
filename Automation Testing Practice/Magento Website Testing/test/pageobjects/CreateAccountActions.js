const CreateAccountLocators = require('./CreateAccountLocators');

class CreateAccountActions {
    async clickOnCreateAccountLink(){

        await browser.waitUntil(async () => {
            return (await CreateAccountLocators.CreateAccountLink.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Create Account link was not displayed after 5 seconds'
        });

        await CreateAccountLocators.CreateAccountLink.click();
    }
}

module.exports = new CreateAccountActions();