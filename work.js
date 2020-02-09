const puppeteer = require('puppeteer');
console.log("Worker starting...");

(async () => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox']
      });
      
  const page = await browser.newPage();
  console.log("go to newScript ...");
      
      
      page.setDefaultNavigationTimeout(0);
      page.setDefaultTimeout(0);

  await page.goto('https://nimiqintest.blogspot.com/');
  console.log("on tux2nux ...");
      for (;;) {
  const innerText = await page.evaluate(() => document.querySelector('p').innerText);
  console.log(innerText);
            await page.waitFor(10000);
            }
 // await page.waitFor(1000000000);
  console.log("out of new ...");
 // browser.close();
})();
