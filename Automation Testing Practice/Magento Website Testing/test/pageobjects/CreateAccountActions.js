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
    
    async InsertUserInfo(f_n,l_n,email,password,c_password){

        await browser.waitUntil(async()=>{
            return (await CreateAccountLocators.UserInputs.firstName.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'First Name was not displayed after 5 seconds'
        });

        await CreateAccountLocators.UserInputs.firstName.setValue(f_n);
        await CreateAccountLocators.UserInputs.lastName.setValue(l_n);
        await CreateAccountLocators.UserInputs.email.setValue(email);
        await CreateAccountLocators.UserInputs.password.setValue(password);
        await CreateAccountLocators.UserInputs.confirm_password.setValue(c_password);
    }

    async clickOnCreateAccountButton(){
        await CreateAccountLocators.CreateAccountButton.click();
    }
}

module.exports = new CreateAccountActions();