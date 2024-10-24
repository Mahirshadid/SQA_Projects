class CreateAccountLocators {
    get CreateAccountLink(){
        return $('//div[@class="panel header"]/ul/li/a[contains(text(),"Create an Account")]');
    }
    get UserInputs(){
        return {
            firstName: $('//input[@name="firstname"]'),
            lastName: $('//input[@name="lastname"]'),
            email: $('//input[@name="email"]'),
            password: $('//input[@name="password"]'),
            confirm_password: $('//input[@name="password_confirmation"]')
        }
    }
    get CreateAccountButton(){
        return $('//button[@type="submit"]/span[contains(text(),"Create an Account")]');
    }
    get BV_EC(){
        return {
            error_lastname: $('//div[@for="lastname"]'),
            error_password: $('//div[@for="password"]'),
            error_c_password: $('//div[@for="password-confirmation"]')
        }
    }
}

module.exports = new CreateAccountLocators();