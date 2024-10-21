class liveChatLocators {
    get iframe(){
        return $('//iframe[@name="chat-widget"]');
    }
    get livechatfeature(){
        return $('//div[@id="livechat-eye-catcher-img"]');
    }
    get livechatwindow(){
        return $('//div[@class="lc-kt6246"]/span[@class="Linkify"]');
    }
    get liveChatNowButton(){
        return $('//button/span[contains(text(),"Chat now")]');
    }
    get userInfo(){
        return {
            name: $('//input[@name="name"]'),
            email: $('//input[@class="lc-152r2s5 e1xplv9i0"]')
        };
    }
    get startchatbutton(){
        return $('//button/span/span[contains(text(),"Start the chat")]');
    }
}

module.exports = new liveChatLocators();