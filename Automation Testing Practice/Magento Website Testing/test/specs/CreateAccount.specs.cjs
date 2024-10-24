const { expect } = require('expect-webdriverio');
const CreateAccountActions = require('../pageobjects/CreateAccountActions');
const CreateAccountLocators = require('../pageobjects/CreateAccountLocators');

let userData = {
    f_n: "mahir",
    l_n: "shadid",
    email: "mysqatest11@gmail.com",
    password: "M@hir123",
    c_password: "M@hir123"
};

let userData_BV_EC = {
    f_n: "mahir",
    l_n: "",
    email: "mysqatest12@gmail.com",
    password: "123",
    c_password: "1234"
};

describe('Create Account Journey', ()=>{
    it('Should Redirect to Create Account Page', async()=>{
        await CreateAccountActions.clickOnCreateAccountLink();
        
        const titleElement = $('//span[@data-ui-id="page-title-wrapper" and contains(text(),"Create New Customer Account")]');
                await browser.waitUntil(async () => {
                    return (await titleElement.isDisplayed());
                }, {
                    timeout: 5000,
                    timeoutMsg: 'Create New Customer Account title was not displayed after 5 seconds'
                });
        
                const titleText = await titleElement.getText();
                expect(titleText).toBe("Create New Customer Account");
        });

    it.skip('Should Insert User Info in the Input Fields', async()=>{
        await CreateAccountActions.InsertUserInfo(
            userData.f_n,
            userData.l_n,
            userData.email,
            userData.password,
            userData.c_password
        );

        await CreateAccountActions.clickOnCreateAccountButton();

        const successRegMsg = $('//div[@data-bind="html: $parent.prepareMessageForHtml(message.text)"]');
        const successRegMsgtxt = await successRegMsg.getText();
        await browser.waitUntil(async () => {
            return (await successRegMsg.isDisplayed());
        }, {
            timeout: 5000,
            timeoutMsg: 'Successfully registered message was not displayed after 5 seconds'
        });
        expect(successRegMsgtxt).toBe("Thank you for registering with Main Website Store.");
    });

    it('Should Handle Boundary values, Edge Cases', async()=>{

        await CreateAccountActions.InsertUserInfo(
            userData_BV_EC.f_n,
            userData_BV_EC.l_n,
            userData_BV_EC.email,
            userData_BV_EC.password,
            userData_BV_EC.c_password
        );

        await CreateAccountActions.clickOnCreateAccountButton();

        const error_lastname = CreateAccountLocators.BV_EC.error_lastname;
        const error_lastname_text = await error_lastname.getText();

        const error_password = CreateAccountLocators.BV_EC.error_password;
        const error_password_text = await error_password.getText();

        const error_c_password = CreateAccountLocators.BV_EC.error_c_password;
        const error_c_password_text = await error_c_password.getText();

        expect(error_lastname_text).toBe("This is a required field.");
        expect(error_password_text).toBe("Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
        expect(error_c_password_text).toBe("Please enter the same value again.")

    });
});