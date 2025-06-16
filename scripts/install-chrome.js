const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Installing Chromium...');
    await puppeteer.launch({ headless: 'new' });
    console.log('Chromium launch successful.');
  } catch (err) {
    console.error('Failed to launch Chromium:', err);
    process.exit(1);
  }
})();
