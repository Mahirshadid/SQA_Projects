const { Builder, By, Key, until } = require('selenium-webdriver');

class pages {
    constructor(driver){
        this.driver = driver;
    }

    get createAccount(){
        return this.driver.findElement(By.xpath('//a[contains(text(),"Create an Account")]'));
    }

    get signUp(){
        return {
            firstName: this.driver.findElement(By.xpath('//input[@name="firstname"]')),
            lastName: this.driver.findElement(By.xpath('//input[@name="lastname"]')),
            email: this.driver.findElement(By.xpath('//input[@name="email"]')),
            password: this.driver.findElement(By.xpath('//input[@name="password"]')),
            confirmPassword: this.driver.findElement(By.xpath('//input[@name="password_confirmation"]')),
            submitButton: this.driver.findElement(By.xpath('//button[@type="submit"]/span[contains(text(),"Create an Account")]'))
        };
    }
}

module.exports = pages;