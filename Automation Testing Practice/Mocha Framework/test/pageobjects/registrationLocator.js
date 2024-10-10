class registrationLocators{
    get clickAccountLink(){
        return $('//a[contains(text(),"Create an Account")]');
    }
    get userInformation(){
        return {
            firstName: $('//input[@name="firstname"]'),
            lastName: $('//input[@name="lastname"]'),
            email: $('//input[@name="email"]'),
            password: $('//input[@name="password"]'),
            confirmPassword: $('//input[@name="password_confirmation"]')
        };
    }
    get submitButton(){
        return $('//button[@type="submit"]/span[contains(text(),"Create an Account")]');
    }
}

module.exports = new registrationLocators();