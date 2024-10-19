const SignUplocators = require('./SignUplocators');

class SignUpactions {
    async clickOnbutton(){
        await SignUplocators.signUpButton.click();
    }
    async insertValues(firstName,lastName,emailAddress,password,country,phoneNumber){
        await browser.waitUntil(async () => {
            return await SignUplocators.userInfo.firstname.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'User information fields were not visible within 15 seconds'
        });

        await SignUplocators.userInfo.firstname.setValue(firstName);
        await SignUplocators.userInfo.lastname.setValue(lastName);
        await SignUplocators.userInfo.email.setValue(emailAddress);
        await SignUplocators.userInfo.password.setValue(password);
        await SignUplocators.userInfo.country.select(country);
        await SignUplocators.userInfo.number.setValue(phoneNumber);

        await browser.waitUntil(async () => {
            return await SignUplocators.captchaCheck.isDisplayed();
        }, {
            timeout: 60000,
            timeoutMsg: 'Captcha is required to be filled up manually'
        });
    }
    async clickSignUpButton(){
        await browser.waitUntil(async () => {
            return await SignUplocators.ClickSignUp.isClickable();
        }, {
            timeout: 15000,
            timeoutMsg: 'Signup Button is not clickable'
        });
        await SignUplocators.ClickSignUp.click();
    }
}

module.exports = new SignUpactions();