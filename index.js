console.log('CPU intensive task');


const puppeteer = require('puppeteer');

(async () => {
  const foo = async () => {
    console.log('start browser')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
  }

  Promise.all([
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo()
  ])

  // await browser.close();
})();
console.log('CPU task end');
