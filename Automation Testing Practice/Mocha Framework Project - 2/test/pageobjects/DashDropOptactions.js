const DDOlocators = require('./DashDropOctlocators');

class DDOactions {
    async clickonmenu(){
        await DDOlocators.DDObutton.click();

        await browser.waitUntil(async () => {
            return await DDOlocators.DDOmenuItem.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'User information fields were not visible within 15 seconds'
        });

        await DDOlocators.DDOmenuItem.click();
    }
    
}

module.exports = new DDOactions();