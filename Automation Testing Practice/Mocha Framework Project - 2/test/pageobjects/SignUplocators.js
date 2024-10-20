class SignUplocators {
    get signUpButton(){
        return $('//a/strong[contains(text(),"Sign Up")]');
    }
    get userInfo(){
        return {
            firstname: $('//input[@placeholder="First Name"]'),
            lastname: $('//input[@placeholder="Last Name"]'),
            email: $('//input[@placeholder="Email"]'),
            password: $('//input[@type="password" and @placeholder="Password"]'),
            country: {
                select: async (optionValue) => {
                    const countryDropdown = await $('//select[@name="country_id"]');
                    await countryDropdown.selectByVisibleText(optionValue);
                }
            },
            number: $('//input[@placeholder="Whatsapp Number"]')
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