class DRFlocator{
    get DemoReqFormInputs(){
        return {
            firstname: $('//input[@name="first_name"]'),
            lastname: $('//input[@name="last_name"]'),
            country: {
                select: async (optionValue) => {
                    const countryDropdown = await $('//select[@name="country_id"]');
                    await countryDropdown.selectByVisibleText(optionValue);
                }
            },
            number: $('//input[@name="whatsapp"]'),
            business: $('//input[@name="business_name"]'),
            email: $('//input[@name="email"]'),
            verify: async () => {
                const num1 = await $('//small/span[@id="numb1"]').getText();
                const num2 = await $('//small/span[@id="numb2"]').getText();
                return parseInt(num1, 10) + parseInt(num2, 10);
            }
        };
    }
    get DemoReqFormSubmitButton(){
        return $('//button[@id="demo"]/small[contains(text(),"Submit")]');
    }
}

module.exports = new DRFlocator();