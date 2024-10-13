const registrationAction = require('../pageobjects/registrationAction');

let fn = 'mahir';
let ln = 'shadid';
let email = '123mahir@gmail.com';
let p = 'm@hir123';

describe("Magento Website Happy Journeys", ()=>{
    it("Successfully register a new user", async()=>{
        await registrationAction.clickOnLink();
        await registrationAction.insertUserInfo(fn, ln, email, p, p);
        await registrationAction.submitInfo();
    });
});