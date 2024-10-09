const { Builder, By, Key, until } = require('selenium-webdriver');
const pages = require('./pages.js');

(
    async function () {
        let driver = await new Builder().forBrowser('chrome').build();

        try{
            await driver.get('https://magento.softwaretestingboard.com/');

            let page = new pages(driver);

            let calink = await page.createAccount;
            await calink.click();

            let signup = await page.signUp;
            await driver.wait(until.elementLocated(By.xpath('//input[@name="firstname"]')));
            await signup.firstName.sendKeys('mahir');
            await signup.lastName.sendKeys('shadid');
            await signup.email.sendKeys('pomprac1@gmail.com');

            let pass = 'm@hir123';
            if(pass.length < 8){
                console.log("Minimum length of password should be 8.");
            }else{
                await signup.password.sendKeys(`${pass}`);
                await signup.confirmPassword.sendKeys(`${pass}`);
                await signup.submitButton.click();
            }

            if(await driver.wait(until.elementLocated(By.xpath('//div[contains(text(),"Thank you for registering with Main Website Store.")]')))){
                console.log("Registration successful!");
                console.log("=========================");
                console.log("Personal Info: "+ await driver.findElement(By.xpath('//div[@class="box-content"]/p')).getText());
            }

        } catch(error) {
            console.log("Error occurred: ", error);
        } finally {
            await driver.quit();
        }
    }
)()

/*

Registration successful!
=========================
Personal Info: mahir shadid
pomprac1@gmail.com

*/