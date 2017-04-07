require('chromedriver');
var assert = require('chai').assert;
var test = require('selenium-webdriver/testing');
var selenium = require('selenium-webdriver');
var By = selenium.By;
var driver = new selenium.Builder()
            .forBrowser('chrome')
            .build();

var timeOut = 180000;

test.describe('UI testing', function () {
    this.timeout(timeOut);
    test.it('Is the correct page', function () {
        driver.get('http://passwordforge.io');
        driver.getTitle()
            .then(function (title) {
                console.log('Page title is: ' + title);
                assert.equal(title, 'Password Forge');
            });
    })
    test.it('can forge a password with only lowercase letters', function () {
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function (text) {
                console.log(`Forged password is ${text}`);
                assert.isNotOk(/[A-Z]/.test(text));
                assert.isNotOk(/[0 - 9]/.test(text));
                assert.isNotOk(/[!"#$%&'()*+,-./]/.test(text));
            });
    })
    test.it('can forge a password with lowercase & Uppercase letters', function () {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function (text) {
                assert.isNotOk(/[0 - 9]/.test(text));
                assert.isNotOk(/[!"#$%&'()*+,-./]/.test(text));
            });
    })
    test.it('can forge a password with lowercase & Uppercase letters & symbols', function () {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('symbols')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function (text) {
                console.log(`Forged password is ${text}`);
                assert.isNotOk(/[0 - 9]/.test(text));
            });
    })
    test.it('can forge a password with lowercase & uppercase letters, symbols & numbers', function () {
        driver.findElement(By.id('uppercase')).click();
        driver.findElement(By.id('symbols')).click();
        driver.findElement(By.id('numbers')).click();
        driver.findElement(By.id('forge')).click();
        driver.findElement(By.id('password-display')).getText()
            .then(function (text) {
                console.log(`Forged password is ${text}`);
            })
            .then(driver.quit())
    })
})
