const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleSearch() {
    // Initialize the WebDriver and open the browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to Google
        await driver.get('https://www.google.com');
        // Wait for the search box to be visible
        let searchBox = await driver.wait(until.elementLocated(By.name('q')), 10000);
        // Enter search term and hit Enter
        await searchBox.sendKeys('mahir shadid', Key.RETURN);
        // Wait for the results to be visible
        await driver.wait(until.titleContains('mahir shadid'), 10000);
        // Get the titles of the search results
        let results = await driver.findElements(By.css('h3'));
        for (let result of results) {
            let title = await result.getText();
            console.log(title);
        }
    } finally {
        await driver.quit();
    }
})();
