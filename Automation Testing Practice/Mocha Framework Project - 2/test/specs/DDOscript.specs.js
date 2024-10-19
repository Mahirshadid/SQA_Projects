const DDOactions = require('../pageobjects/DashDropOptactions');

describe('Dashboard Dropdown Items', ()=>{
    it('Should redirect to the selected menu item', async()=>{
        await DDOactions.clickonmenu();
    });
})