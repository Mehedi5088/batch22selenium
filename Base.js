import {Builder, Browser, By} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';


class Base{
    constructor(){
        // this.driver = new Builder().forBrowser(Browser.CHROME).build();
        const options = new chrome.Options();
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
        options.addArguments('--ozone-platform=x11');
        options.addArguments('--disable-gpu');
        this.driver = new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();


            // locator
            this.registerLink = By.xpath("//a[@class='ico-register' and text()='Register']")
    }

    async browserOpen(){
       await this.driver.get("https://demowebshop.tricentis.com/");
       this.driver.findElement(this.registerLink).click();

    }

    async browserClose(){
       await this.driver.quit();

    }
}

const result = new Base();
   await result.browserOpen();
//    await result.browserClose();
