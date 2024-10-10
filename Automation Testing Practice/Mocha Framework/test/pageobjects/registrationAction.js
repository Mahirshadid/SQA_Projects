const registrationLocators = require('./registrationLocator');

class registrationAction{
    async clickOnLink(){
        await registrationLocators.clickAccountLink.click();
    }
    async insertUserInfo(firstName, lastName, email, password, confirmPassword){

        await browser.waitUntil(async () => {
            return await registrationLocators.userInformation.firstName.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'User information fields were not visible within 5 seconds'
        });

        await registrationLocators.userInformation.firstName.setValue(firstName);
        await registrationLocators.userInformation.lastName.setValue(lastName);
        await registrationLocators.userInformation.email.setValue(email);
        await registrationLocators.userInformation.password.setValue(password);
        await registrationLocators.userInformation.confirmPassword.setValue(confirmPassword);
    }
    async submitInfo(){
        await registrationLocators.submitButton.click();
    }
}

module.exports = new registrationAction();