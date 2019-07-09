const puppeteer = require("puppeteer");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://unit42.paloaltonetworks.com/?pg=1#popular');
//   await page.setViewport({ width: 1000, height: 500 });
  await page.screenshot({ path: "screenshot.png" });
  browser.close();
}

scrape();
