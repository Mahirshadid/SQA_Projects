const liveChatLocators = require('./LiveChatlocaators');

class livechatactions {
    async chatfeatureclick() {
        await browser.waitUntil(async () => {
            return await liveChatLocators.livechatfeature.isDisplayed();
        }, {
            timeout: 30000,
            timeoutMsg: 'Chat Feature was not displayed'
        });

        await liveChatLocators.livechatfeature.click();

        await browser.switchToFrame(liveChatLocators.iframe());

        await browser.waitUntil(async () => {
            return await liveChatLocators.livechatwindow.isDisplayed();
        }, {
            timeout: 10000,
            timeoutMsg: 'Chat window was not displayed'
        });

        await liveChatLocators.liveChatNowButton.click();
    }

    async insertinfo(name,email){
        await browser.waitUntil(async () => {
            return await liveChatLocators.userInfo.name.isDisplayed();
        }, {
            timeout: 5000,
            timeoutMsg: 'User information field was not displayed'
        });

        await liveChatLocators.userInfo.name.setValue(name);
        await liveChatLocators.userInfo.email.setValue(email);
    }

    async clickonStartButton(){
        await liveChatLocators.startchatbutton.click();

        await browser.switchToParentFrame();
    }
}

module.exports = new livechatactions();