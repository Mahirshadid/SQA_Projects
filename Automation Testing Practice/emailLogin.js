const { Builder, By, Key, until } = require('selenium-webdriver');

(
    async function emailLogin() {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://accounts.google.com/signin/v2/identifier');
            let textBox = await driver.wait(until.elementLocated(By.name('identifier')), 10000);
            await textBox.sendKeys('mahir.shadid@gmail.com', Key.RETURN);
            await driver.wait(until.elementLocated(By.name('password')), 10000);
            let passwordInput = await driver.findElement(By.name('password'));
            await passwordInput.sendKeys('123', Key.RETURN);
            await driver.wait(until.urlContains('inbox'), 10000);
            console.log('Login successful!');
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            await driver.quit();
        }
    }
)()