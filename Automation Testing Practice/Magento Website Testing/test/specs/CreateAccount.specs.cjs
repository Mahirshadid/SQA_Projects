const CreateAccountActions = require('../pageobjects/CreateAccountActions');

describe('Create Account Journey', ()=>{
    it('Should Redirect to Create Account Page', async()=>{
        await CreateAccountActions.clickOnCreateAccountLink();
        
        describe('Create Account Journey', ()=>{
            it('Should Redirect to Create Account Page', async()=>{
                const titleElement = $('//span[@data-ui-id="page-title-wrapper" and contains(text(),"Create New Customer Account")]');
                await browser.waitUntil(async () => {
                    return (await titleElement.isDisplayed());
                }, {
                    timeout: 5000,
                    timeoutMsg: 'Create New Customer Account title was not displayed after 5 seconds'
                });
        
                const titleText = await titleElement.getText();
                expect(titleText).toBe("Create New Customer Account");
            })
        })
    })
})