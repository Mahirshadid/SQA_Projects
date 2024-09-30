const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testSauceDemo() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Login Function
        await driver.get('https://www.saucedemo.com/');
        let username = await driver.wait(until.elementLocated(By.name('user-name')), 10000);
        await username.sendKeys('standard_user');

        let password = await driver.findElement(By.name('password'));
        await password.sendKeys('secret_sauce');

        let loginButton = await driver.findElement(By.name('login-button'));
        await loginButton.click();

        await driver.wait(until.urlContains('inventory'), 10000);
        console.log('Login successful!');

        // Add Item to Cart Function
        let item = await driver.findElement(By.id('item_5_title_link')).getText();
        let addToCartButton = await driver.findElement(By.name('add-to-cart-sauce-labs-fleece-jacket'));

        if (item === 'Sauce Labs Fleece Jacket') {
            await addToCartButton.click();
            let removeFromCartButton = await driver.findElement(By.name('remove-sauce-labs-fleece-jacket'));
            if(removeFromCartButton){
                console.log('-------------------------------');
                console.log('Item added to the cart successfully!');
            }else{
                console.log('-------------------------------');
                console.log('Item adding failed!');
            }
            
        } else {
            console.log('-------------------------------');
            console.log('Item not available!');
        }

        // Verify Cart item
        let cartIcon = await driver.findElement(By.id('shopping_cart_container'));
        await cartIcon.click();
        if(await driver.wait(until.urlContains('cart'), 10000)){
            let itemInCart = await driver.findElement(By.id('item_5_title_link')).getText();
            let price = await driver.findElement(By.css('[data-test="inventory-item-price"]')).getText();
            if (itemInCart && price) {
                console.log('-------------------------------');
                console.log('Cart Item: ' + itemInCart);
                console.log('Price: ' + price);
            }else{
                console.log('-------------------------------');
                console.log('Cart empty!')
            }
        }

        // Checkout

        let checkoutButton = await driver.findElement(By.id('checkout'));
        await checkoutButton.click();

        let firstName = await driver.findElement(By.css('[data-test="firstName"]'));
        await firstName.sendKeys('mahir');

        let lastName = await driver.findElement(By.css('[data-test="lastName"]'));
        await lastName.sendKeys('shadid');

        let postalCode = await driver.findElement(By.css('[data-test="postalCode"]'));
        await postalCode.sendKeys('4203');

        let continueButton = await driver.findElement(By.id('continue'));
        await continueButton.click();

        let citem = await driver.findElement(By.id('item_5_title_link')).getText();
        let cprice = await driver.findElement(By.css('[data-test="inventory-item-price"]')).getText();
        let cpi = await driver.findElement(By.css('[data-test="payment-info-value"]')).getText();
        let si = await driver.findElement(By.css('[data-test="shipping-info-value"]')).getText();
        let total = await driver.findElement(By.css('[data-test="total-label"]')).getText(); 

        if(citem && cprice && cpi && si && total){
            console.log('-------------------------------');
            console.log('Item Name: '+citem);
            console.log('Item Price: '+cprice);
            console.log('Payment Info: '+cpi);
            console.log('Shipping Info: '+si);
            console.log('In Total: '+total);
            let finishButton = await driver.findElement(By.id('finish'));
            await finishButton.click();

            let ch = await driver.findElement(By.css('[data-test="complete-header"]')).getText();
            if(ch === 'Thank you for your order!'){
                console.log('-------------------------------');
                console.log('Checkout Success!');
            }else{
                console.log('-------------------------------');
                console.log('Checkout failed!');
            }

        }

    } catch (error) {
        console.log('-------------------------------');
        console.log('Something went wrong:', error);
    } finally {
        await driver.quit();
    }
})();


/* 

Login successful!
-------------------------------
Item added to the cart successfully!
-------------------------------
Cart Item: Sauce Labs Fleece Jacket
Price: $49.99
-------------------------------
Item Name: Sauce Labs Fleece Jacket
Item Price: $49.99
Payment Info: SauceCard #31337
Shipping Info: Free Pony Express Delivery!
In Total: Total: $53.99
-------------------------------
Checkout Success!

*/