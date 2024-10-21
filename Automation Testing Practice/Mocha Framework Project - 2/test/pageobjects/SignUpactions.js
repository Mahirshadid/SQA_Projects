const SignUplocators = require('./SignUplocators');

class SignUpactions {
    async clickOnbutton(){
        await SignUplocators.signUpButton.click();
    }
    async insertValues(firstName,lastName,emailAddress,Password,country,phoneNumber){
        await browser.waitUntil(async () => {
            return await SignUplocators.userInfo.firstname.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'User information fields were not visible within 15 seconds'
        });
        await browser.pause(15000);
        await SignUplocators.userInfo.firstname.setValue(firstName);
        await SignUplocators.userInfo.lastname.setValue(lastName);
        await SignUplocators.userInfo.email.setValue(emailAddress);
        await browser.pause(3000);
        await SignUplocators.userInfo.password.setValue(Password);
        await SignUplocators.userInfo.country.select(country);
        await SignUplocators.userInfo.number.setValue(phoneNumber);

        await browser.waitUntil(async () => {
            return await SignUplocators.captchaCheck.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'Captcha is required to be filled up manually'
        });
    }
    async clickSignUpButton(){
        await browser.waitUntil(async () => {
            return await SignUplocators.ClickSignUp.isClickable();
        }, {
            timeout: 10000,
            timeoutMsg: 'Signup Button is not clickable'
        });
        await SignUplocators.ClickSignUp.click();
    }
}

module.exports = new SignUpactions();