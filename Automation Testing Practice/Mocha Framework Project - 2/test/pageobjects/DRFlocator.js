class DRFlocator{
    get TestDriveInfo(){
        return {
            firstname: $('//input[@name="first_name"]'),
            lastname: $('//input[@name="last_name"]')
        };
    }
}