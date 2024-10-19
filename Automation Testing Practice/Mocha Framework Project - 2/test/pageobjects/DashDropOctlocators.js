class DDOlocators {
    get DDObutton(){
        return $('//div[@id="mynavbar"]/ul/li/a/span[contains(text(),"Product")]');
    }
    get DDOmenuItem(){
        return $('//ul/li/a[contains(text(),"Technology")]');
    }
}

module.exports = new DDOlocators();