const livechatactions = require('../pageobjects/LiveChatactions');

let name = 'bulbasaur';
let email = 'pokemon@gmail.com';

describe('Live chat Journey', ()=>{
    it('Should smoothly handle the live chat feature', async()=>{
        livechatactions.chatfeatureclick();
        livechatactions.insertinfo(name,email);
        livechatactions.clickonStartButton();
    });
});