const SignUpactions = require('../pageobjects/SignUpactions');

let userdata = {
    firstName: 'mahir',
    lastName: 'shadid',
    country: 'Bangladesh +880',
    phoneNumber: '1891789791',
    password: '12345678',
    emailAddress: 'mysqatest7@gmail.com'
};

describe('Sign Up Option', ()=>{
    it('Should successfully sign up', async()=>{
        await SignUpactions.clickOnbutton();
        await SignUpactions.insertValues(
            userdata.firstName,
            userdata.lastName,
            userdata.emailAddress,
            userdata.password,
            userdata.country,
            userdata.phoneNumber);
        await SignUpactions.clickSignUpButton();
    });
})