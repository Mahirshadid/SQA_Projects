class CreateAccountLocators {
    get CreateAccountLink(){
        return $('//div[@class="panel header"]/ul/li/a[contains(text(),"Create an Account")]');
    }
}

module.exports = new CreateAccountLocators();