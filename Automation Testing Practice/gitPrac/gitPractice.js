const { Builder, By, until, Key } = require('selenium-webdriver');

(
    async function gitPractice() {
        let driver = await new Builder().forBrowser('chrome').build();
        let pname = 'nike';
        try{
            await driver.get('https://demo.evershop.io/');

            await driver.findElement(By.xpath('//a[@class="search-icon"]')).click();

            let product = await driver.wait(until.elementLocated(By.xpath('//input[@type="text" and @placeholder="Search"]')),10000);
            await product.sendKeys(`${pname}`, Key.ENTER);

            let avail = await driver.wait(until.elementLocated(By.xpath('//span[@class="product-count italic block mt-8"]')),10000).getText();
            if(avail[0] == 0){
                console.log("Product not available!");
            }else{
                console.log("Available: "+avail);
            }


        } catch(error) {
            console.log('Error occurred: '+error);
        } finally {
            driver.quit();
        }
    }
)()