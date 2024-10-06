import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js'; 
import { expect } from 'chai';

describe('ParaBank Test Suite', function () {
    this.timeout(10000);
    let driver;
    const options = new Options();
    options.addArguments('--ignore-certificate-errors');
    options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

    const username = 'mahir31';
    const password = '12345678';
    before(async function () {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        await driver.get('https://parabank.parasoft.com/parabank/index.htm');
    });

    after(async function () {
        await driver.quit();
    });

    it('should register a new user', async function () {
        await driver.findElement(By.xpath('//a[contains(text(),"Register")]')).click();

        await driver.wait(until.elementLocated(By.xpath('//input[@name="customer.firstName"]'))).sendKeys('mahir');
        await driver.findElement(By.xpath('//input[@name="customer.lastName"]')).sendKeys('shadid');
        await driver.findElement(By.xpath('//input[@name="customer.address.street"]')).sendKeys('Katalganj');
        await driver.findElement(By.xpath('//input[@name="customer.address.city"]')).sendKeys('chittagong');
        await driver.findElement(By.xpath('//input[@name="customer.address.state"]')).sendKeys('chittagong');
        await driver.findElement(By.xpath('//input[@name="customer.address.zipCode"]')).sendKeys('4000');
        await driver.findElement(By.xpath('//input[@name="customer.phoneNumber"]')).sendKeys('1234567890');
        await driver.findElement(By.xpath('//input[@name="customer.ssn"]')).sendKeys('123-45-6789');

        await driver.findElement(By.xpath('//input[@name="customer.username"]')).sendKeys(username);
        await driver.findElement(By.xpath('//input[@name="customer.password"]')).sendKeys(password);
        await driver.findElement(By.xpath('//input[@name="repeatedPassword"]')).sendKeys(password);
        await driver.sleep(3000);

        await driver.findElement(By.xpath('//input[@type="submit" and @value="Register"]')).click();

        const successMsg = await driver.findElement(By.xpath('//p[contains(text(),"Your account was created successfully.")]')).getText();
        expect(successMsg).to.include('Your account was created successfully');
    });

    it('should log out successfully', async function () {
        await driver.findElement(By.xpath('//a[contains(text(),"Log Out")]')).click();
        const isLoggedOut = await driver.wait(until.urlContains('index.htm'), 3000);
        expect(isLoggedOut).to.be.true;
    });

    it('should log in successfully', async function () {
        this.timeout(10000);

        await driver.findElement(By.xpath('//input[@name="username"]')).sendKeys(username);
        await driver.findElement(By.xpath('//input[@name="password"]')).sendKeys(password);
        await driver.findElement(By.xpath('//input[@type="submit" and @value="Log In"]')).click();

        const isLoggedIn = await driver.findElement(By.xpath('//h1[contains(text(),"Accounts Overview")]')).isDisplayed();
        expect(isLoggedIn).to.be.true;
    });

    it('should transfer funds successfully', async function () {
        this.timeout(10000);
        
        await driver.findElement(By.xpath('//a[contains(text(),"Transfer Funds")]')).click();
    
        const isTransferPage = await driver.findElement(By.xpath('//h1[contains(text(),"Transfer Funds")]')).isDisplayed();
        expect(isTransferPage).to.be.true;
    
        await driver.findElement(By.xpath('//input[@id="amount" and @name="input"]')).sendKeys('10');
    
        const fromAccountSelect = await driver.findElement(By.id('fromAccountId'));
        const fromOptions = await fromAccountSelect.findElements(By.tagName('option'));
        
        if (fromOptions.length > 0) {
            await fromOptions[0].click();
        }
    
        const toAccountSelect = await driver.findElement(By.id('toAccountId'));
        const toOptions = await toAccountSelect.findElements(By.tagName('option'));
    
        if (toOptions.length > 0) {
            await toOptions[0].click();
        }
    
        await driver.sleep(1500);
    
        await driver.findElement(By.xpath('//input[@type="submit" and @value="Transfer"]')).click();
        
        const transferSuccessMsg = await driver.wait(until.elementLocated(By.xpath('//*[@id="amountResult"]')), 10000).getText();
        expect(transferSuccessMsg).to.not.be.null;
    });
    

    it('should find transactions by date', async function () {
        this.timeout(10000);
        await driver.findElement(By.xpath('//a[contains(text(),"Find Transactions")]')).click();

        await driver.findElement(By.xpath('//input[@id="transactionDate"]')).sendKeys('10-04-2024');
        await driver.findElement(By.xpath('//button[@id="findByDate"]')).click();

        const results = await driver.wait(until.elementLocated(By.xpath('//h1[contains(text(),"Transaction Results")]')), 10000);
        expect(results).to.not.be.null;
    });
});
