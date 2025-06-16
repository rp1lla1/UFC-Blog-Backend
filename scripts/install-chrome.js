const puppeteer = require('puppeteer');

(async () => {
  const browserFetcher = puppeteer.createBrowserFetcher();
  const localRevisions = await browserFetcher.localRevisions();
  if (localRevisions.length === 0) {
    console.log('Downloading Chromium...');
    await browserFetcher.download('118.0.5993.0'); // known compatible version
  } else {
    console.log('Chromium already installed.');
  }
})();
