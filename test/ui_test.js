require('chromedriver');
var assert = require('chai').assert;
var test = require('selenium-webdriver/testing');
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until;
var driver = new selenium.Builder()
            .forBrowser('chrome')
            .build();

var timeOut = 15000;

test.describe('UI testing', function() {
    this.timeout(timeOut);
    test.it('Is the correct page', function() {
        driver.get('http://passwordforge.io');
        driver.getTitle()
            .then(function(title) {
             console.log('Page title is: ' + title);
             assert.equal(title, 'Password Forge');
            });
    })
    // test.it('allows user to set password length', function() {
        // driver.findElements(By.className("Slider"))
//   .then
    // })
    test.it('can forge a password with only lowercase letters', function() {
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function(text) {
                console.log(`Forged password is ${text}`);
                assert.isTrue(!text.includes["A"-"Z"]);
                assert.isTrue(!text.includes[0-9]);
                assert.isTrue(!text.includes(String.fromCharCode(33-47)))
            });
    })
    test.it('can forge a password with lowercase & Uppercase letters', function() {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function(text) {
                console.log(`Forged password is ${text}`);
                assert.isTrue(!text.includes["A"-"Z"]);
                assert.isTrue(!text.includes[0-9]);
                assert.isTrue(!text.includes(String.fromCharCode(33-47)))
            });
    })
    test.it('can forge a password with lowercase & Uppercase letters & symbols', function() {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('symbols')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function(text) {
                console.log(`Forged password is ${text}`);
                assert.isTrue(!text.includes["A"-"Z"]);
                assert.isTrue(!text.includes[0-9]);
                assert.isTrue(!text.includes(String.fromCharCode(33-47)))
            });
    })
    test.it('can forge a password with lowercase & uppercase letters, symbols & numbers', function() {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('symbols')).click();
        driver.findElement(By.id('numbers')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function(text) {
                console.log(`Forged password is ${text}`);
                assert.isTrue(!text.includes["A"-"Z"]);
                assert.isTrue(!text.includes[0-9]);
                assert.isTrue(!text.includes(String.fromCharCode(33-47)))
            })
            .then(driver.quit())
    })
})
// driver.quit();






// test.describe('calculating weights', function() {
//   test.it('calculates weights', function() {
//     var driver = new selenium.Builder().
//         withCapabilities(selenium.Capabilities.firefox()).
//         build();

//     driver.get("https://decohere.herokuapp.com/planets");

//     var weight = driver.isElementPresent(selenium.By.id('wt'));
//     assert.equal(weight, true, "Weight entry not possible");

//     driver.quit();
//   });
// });