class SignUplocators {
    get signUpButton(){
        return $('//a/strong[contains(text(),"Sign Up")]');
    }
    get userInfo(){
        return {
            firstname: $('//input[@name="first_name"]'),
            lastname: $('//input[@name="last_name"]'),
            email: $('//input[@name="email"]'),
            password: $('//input[@name="password"]'),
            country: {
                select: async (optionValue) => {
                    const countryDropdown = await $('//select[@name="country_id"]');
                    await countryDropdown.selectByVisibleText(optionValue);
                }
            },
            number: $('//input[@name="mobile"]')
        };
    }
    get captchaCheck(){
        return $('//div[@class="recaptcha-checkbox-checkmark"]');
    }
    get ClickSignUp(){
        return $('//button[contains(text(),"Signup")]');
    }
}

module.exports = new SignUplocators();