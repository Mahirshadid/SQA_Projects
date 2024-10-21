const SignUpactions = require('../pageobjects/SignUpactions');

let userdata = {
    firstName: 'mahir',
    lastName: 'shadid',
    emailAddress: 'mysqatest7@gmail.com',
    Password: '123456789',
    country: 'Bangladesh +880',
    phoneNumber: '1891789791'
};

describe('Sign Up Option', ()=>{
    it('Should successfully sign up', async()=>{
        await SignUpactions.clickOnbutton();
        await SignUpactions.insertValues(
            userdata.firstName,
            userdata.lastName,
            userdata.emailAddress,
            userdata.Password,
            userdata.country,
            userdata.phoneNumber);
        await SignUpactions.clickSignUpButton();
    });
})