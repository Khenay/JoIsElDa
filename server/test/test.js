const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test() {

    var nombre = "Test"
    var apellidos ="TestApel"
    var correo = "correo@correo.com"
    var nick = "TestNick"
    var pass = "TestPass"

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/registro");
    
    await driver.findElement(By.xpath('//*[@id="name"]')).sendKeys(nombre, Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="lastName"]')).sendKeys(apellidos, Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="mail"]')).sendKeys(correo, Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="nick"]')).sendKeys(nick, Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="pass"]')).sendKeys(pass, Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="button"]')).click();


    //Cerramos el navegador
    console.log('Usuario ' + nombre + ' registrado')
    await driver.quit();
}

test();