const DRFactions = require('../pageobjects/DRFaction');

let fn = 'mahir';
let ln = 'shadid';
let country = 'Bangladesh +880';
let num = '12423432';
let business = 'janina';
let email = 'mysqatest7@gmail.com';

describe('Demo Request Form Fill Up', ()=>{
    it('Should Fill Up the form smoothly', async()=>{
        await DRFactions.InputsInsert(fn,ln,country,num,business,email);
        await DRFactions.ClickSubmitButton();
    })
})