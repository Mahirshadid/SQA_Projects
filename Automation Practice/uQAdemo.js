const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(
    async function uqaLoginPageTesting() {
        let options = new chrome.Options();
        options.addArguments('--ignore-certificate-errors');

        let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        try{
            await driver.get('https://ultimateqa.com/automation');

            // let targetPagexpath = "//a[contains(text(),'Login automation')]";
            // let regxpath = "//a[contains(text(),'Create a new account')]";
            // let fnxpath = "//input[@name='user[first_name]']"
            // let lnxpath = "//input[@name='user[last_name]']"
            // let emailxpath = "//input[@name='user[email]']"
            // let pxpath = "//input[@name='user[password]']"
            // let termboxxpath = "//input[@name='user[terms]']"
            // let signUpxpath = "//button[contains(text(),'Sign up')]"

            await driver.findElement(By.xpath('//a[contains(text(),"Login automation")]')).click();
            let signUp = await driver.wait(until.elementLocated(By.xpath('//a[@href="/users/sign_up"]')), 10000);
            await driver.executeScript("arguments[0].scrollIntoView(true);", signUp);
            await driver.sleep(3000);
            await driver.wait(until.elementIsVisible(signUp), 5000);
            await driver.wait(until.elementIsEnabled(signUp), 5000);
            await signUp.click();

            let fn = await driver.wait(until.elementLocated(By.xpath('//input[@name="user[first_name]"]')));
            await fn.sendKeys('mahir');

            let ln = await driver.findElement(By.xpath("//input[@name='user[last_name]']"));
            await ln.sendKeys('shadid');

            let email = await driver.findElement(By.xpath("//input[@name='user[email]']"));
            await email.sendKeys('mahir.shadid@gmail.com');

            let password = await driver.findElement(By.xpath("//input[@name='user[email]']"));
            await password.sendKeys('12345678');

            let termBox =  await driver.findElement(By.xpath("//input[@name='user[terms]']"));
            await termBox.click();

            let signUpbtn = await driver.findElement(By.xpath("//button[contains(text(),'Sign up')]"));
            await signUpbtn.click();

        } catch(error){
            console.log("Something went wrong. Error: " + error);
        } finally {
            driver.quit();
        }
    }
)()