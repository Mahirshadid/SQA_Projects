const DRFlocator = require('./DRFlocator');

class DRFactions {
    async InputsInsert(fn,ln,country,num,business,email) {
        await browser.waitUntil(async () => {
            return await DRFlocator.DemoReqFormInputs.firstname.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'User information fields were not visible within 15 seconds'
        });

        await DRFlocator.DemoReqFormInputs.firstname.setValue(fn);
        await DRFlocator.DemoReqFormInputs.lastname.setValue(ln);
        await DRFlocator.DemoReqFormInputs.country.select(country);
        await DRFlocator.DemoReqFormInputs.number.setValue(num);
        await DRFlocator.DemoReqFormInputs.business.setValue(business);
        await DRFlocator.DemoReqFormInputs.email.setValue(email);
        await DRFlocator.DemoReqFormInputs.verify;
    }
    async ClickSubmitButton(){
        await DRFlocator.DemoReqFormSubmitButton.click();
    }
}

module.exports = new DRFactions();