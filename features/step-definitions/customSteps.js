// MANDAMOS A LLAMAR LOS RECURSOS QUE UTILIZAREMOS DE CADA PAQUETE NODE
const {Given, When, And, Then, setDefaultTimeout, Before, After} = require('@cucumber/cucumber');
const {expect} = require('chai'); 
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const fs = require('fs');

//DEFINIMOS UN NUEVO TIMEOUT DE 60,000 milisegundos
setDefaultTimeout(60 * 1000)

// CONSTRUIMOS NUESTRO CONSTROLADOR (API WEBDRIVER)
let driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

// CREAMOS LOS SCRIPTS PARA CADA CASO GHERKIN
// UTILIZAMOS ASINCRONIA PARA LAS FUNCIONES DE CADA GHERKIN (ASYNC-AWAIT)

Given('the user visit Google homepage', async () => {
    datos = JSON.parse(fs.readFileSync('./data/dataFake.json'))   //leemos el json y convertimos a objeto
    await driver.get('https://www.google.com')
  });

  When('the user search Management Solutions', async () => {
    await driver.findElement(By.name('q')).sendKeys(`${datos.searchKey}` + '\n')
  });

  When('the user click on the first result', async () => {
    await driver.findElement(By.className('LC20lb MBeuO DKV0Md')).click()
  });

  Then('the user can see the Hero section', async () => {
  });

