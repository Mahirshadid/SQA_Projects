const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(
    async function ParaBankRegister() {
        let options = new chrome.Options();
        options.addArguments('--ignore-certificate-errors');
        options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

        let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

        try {
            await driver.get('https://parabank.parasoft.com/parabank/index.htm');

            // Click on register link
            
            await driver.findElement(By.xpath('//a[contains(text(),"Register")]')).click();

            // Fill the sign-up form

            let fn = await driver.wait(until.elementLocated(By.xpath('//input[@name="customer.firstName"]')));
            await fn.sendKeys('mahir');

            let ln = await driver.findElement(By.xpath('//input[@name="customer.lastName"]'));
            await ln.sendKeys('shadid');

            let address = await driver.wait(until.elementLocated(By.xpath('//input[@name="customer.address.street"]')));
            await address.sendKeys('Katalganj');

            let city = await driver.findElement(By.xpath('//input[@name="customer.address.city"]'));
            await city.sendKeys('chittagong');

            let state = await driver.findElement(By.xpath('//input[@name="customer.address.state"]'));
            await state.sendKeys('chittagong');

            let zipCode = await driver.findElement(By.xpath('//input[@name="customer.address.zipCode"]'));
            await zipCode.sendKeys('4000');

            let phone = await driver.findElement(By.xpath('//input[@name="customer.phoneNumber"]'));
            await phone.sendKeys('1234567890');

            let ssn = await driver.findElement(By.xpath('//input[@name="customer.ssn"]'));
            await ssn.sendKeys('123-45-6789');

            let usernameTxt = 'mahir15'; /////////////////////////////////////////////////////////////////////////////////////////////////
            let username = await driver.findElement(By.xpath('//input[@name="customer.username"]'));
            await username.sendKeys(`${usernameTxt}`);

            let password = await driver.findElement(By.xpath('//input[@name="customer.password"]'));
            let passwordTxt = '12345678'
            await password.sendKeys(`${passwordTxt}`);

            let confirmPassword = await driver.findElement(By.xpath('//input[@name="repeatedPassword"]'));
            await confirmPassword.sendKeys('12345678');


            let regbtn = await driver.findElement(By.xpath('//input[@type="submit" and @value="Register"]'));
            // await driver.executeScript("arguments[0].scrollIntoView(true);", regbtn);
            // await driver.sleep(2000);
            await regbtn.click(); 

            if(await driver.findElement(By.xpath('//p[contains(text(),"Your account was created successfully. You are now logged in.")]')).getText()){
                console.log('=====================================================');
                console.log('Account Created Successfully!');
                console.log('=====================================================');

            }else{
                console.log('Account Creation Failed!');
                console.log('=====================================================');
            }

            // Clicking on logout link

            await driver.findElement(By.xpath('//a[contains(text(),"Log Out")]')).click();

            if(await driver.wait(until.urlContains('index.htm'), 3000)){
                console.log('Log out Successfully!');
                console.log('=====================================================');
            }else{
                console.log('Log out Failed!');
                console.log('=====================================================');
            }

            // Fill up login information and login

            let lusername = await driver.findElement(By.xpath('//input[@name="username"]'));
            await lusername.sendKeys(`${usernameTxt}`);

            let lpassword = await driver.findElement(By.xpath('//input[@name="password"]'));
            await lpassword.sendKeys(`${passwordTxt}`);

            let loginbtn = await driver.findElement(By.xpath('//input[@type="submit" and @value="Log In"]'));
            await loginbtn.click(); 

            if(await driver.findElement(By.xpath('//h1[contains(text(),"Accounts Overview")]'))){
                console.log('Log In Successful!');
                console.log('=====================================================');
            }else{
                console.log('Log In Failed!');
                console.log('=====================================================');
            }

            // Fund Transfer

            let ftlink = await driver.findElement(By.xpath('//a[contains(text(),"Transfer Funds")]'));
            await ftlink.click(); 

            if(await driver.findElement(By.xpath('//h1[contains(text(),"Transfer Funds")]'))){
                
                let amount = await driver.findElement(By.xpath('//input[@id="amount" and @name="input"]'));
                await amount.sendKeys('10');
                await driver.sleep(3000);
                await driver.findElement(By.xpath('//input[@type="submit" and @value="Transfer"]')).click();

                if(await driver.findElement(By.xpath('//h1[contains(text(),"Transfer Complete!")]'))){
                    console.log('Fund Transfer Successful!');
                    console.log('=====================================================');
                }else{
                    console.log('Fund Transfer Failed!');
                    console.log('=====================================================');
                }
            }else{
                console.log('Could not found Transfer Funds page!');
                console.log('=====================================================');
            }

            // Checking the transaction summary

            await driver.findElement(By.xpath('//a[contains(text(),"Find Transactions")]')).click();

            let trDate = await driver.findElement(By.xpath('//input[@id="transactionDate"]'));
            await trDate.sendKeys('10-04-2024');
            await driver.sleep(3000);
            await driver.findElement(By.xpath('//button[@id="findByDate"]')).click();

            if(await driver.wait(until.elementLocated(By.xpath('//h1[contains(text(),"Transaction Results")]')), 10000)) {
                let table = await driver.wait(until.elementLocated(By.xpath('//table[@id="transactionTable"]')), 10000);
                let cells = await table.findElements(By.xpath('.//tbody[@id="transactionBody"]/tr/td'));
                
                if (cells.length == 0) {
                    console.log('No transactions found for the selected date.');
                } else {
                    let cellData = [];
                    for (let cell of cells) {
                        let text = await cell.getText();
                        cellData.push(text);
                    }
                    console.log("TR Data: "+cellData);
                }
                console.log('=====================================================');
            } else {
                console.log('No Data Found!');
                console.log('=====================================================');
            }
        } catch (error) {
            console.log("Something went wrong. Error: " + error);
        } finally {
            driver.quit();
        }
    }
)();