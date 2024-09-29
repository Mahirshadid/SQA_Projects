const { Builder, By, until } = require('selenium-webdriver');

(
    async function demoTable() {
        let driver = await new Builder().forBrowser('chrome').build();

        try{
            await driver.get('https://practice.expandtesting.com/tables');

            await driver.wait(until.elementLocated(By.id('table1')), 10000);

            let table = await driver.findElement(By.id('table1'));

            let rows = await table.findElements(By.css('tbody tr'));

            for (let i = 0; i < rows.length; i++) {
                let columns = await rows[i].findElements(By.css('td'));
    
                let firstName = await columns[0].getText(); 
                let email = await columns[1].getText();  
    
                console.log(`Row ${i+1}: First Name: ${firstName}, Email: ${email}`);
            }

            let deleteButton = await table.findElement(By.css('.btn-danger'));
            await deleteButton.click();

        } catch {
            console.log('Something went wrong!');
        } finally {
            driver.quit();
        }
    }
)()