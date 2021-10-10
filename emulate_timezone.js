const puppeteer = require('puppeteer');

(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { 
        headless: true, 
        args: [
            '--start-maximized',
            '-- disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-sandbox'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    await page.setViewport({width: 1920, height: 1080});
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');

    // America/New_York
    await page.emulateTimezone('America/New_York');
    // emulate to Asia/Makassar a.k.a GMT+8
    //await page.emulateTimezone('Asia/Makassar');

    // go to the web
    await page.goto('https://whatismytimezone.com');
    var ss = await page.screenshot({path: "timezone_america_new_york_screenshot.png"});


    await page.goto('https://rpodcast.shinyapps.io/shinycal');
    await page.waitForTimeout(9000);

    var ss = await page.screenshot({path: "shinycal_america_new_york_screenshot.png"});

    // America/Chicago
    await page.emulateTimezone('America/Chicago');
    // emulate to Asia/Makassar a.k.a GMT+8
    //await page.emulateTimezone('Asia/Makassar');

    // go to the web
    await page.goto('https://whatismytimezone.com');
    var ss = await page.screenshot({path: "timezone_america_chicago_screenshot.png"});


    await page.goto('https://rpodcast.shinyapps.io/shinycal');
    await page.waitForTimeout(9000);

    var ss = await page.screenshot({path: "shinycal_america_chicago_screenshot.png"});

    // America/Denver
    await page.emulateTimezone('America/Denver');
    // emulate to Asia/Makassar a.k.a GMT+8
    //await page.emulateTimezone('Asia/Makassar');

    // go to the web
    await page.goto('https://whatismytimezone.com');
    var ss = await page.screenshot({path: "timezone_america_denver_screenshot.png"});


    await page.goto('https://rpodcast.shinyapps.io/shinycal');
    await page.waitForTimeout(9000);

    var ss = await page.screenshot({path: "shinycal_america_denver_screenshot.png"});

    // America/Los_Angeles
    await page.emulateTimezone('America/Los_Angeles');
    // emulate to Asia/Makassar a.k.a GMT+8
    //await page.emulateTimezone('Asia/Makassar');

    // go to the web
    await page.goto('https://whatismytimezone.com');
    var ss = await page.screenshot({path: "timezone_america_los_angeles_screenshot.png"});


    await page.goto('https://rpodcast.shinyapps.io/shinycal');
    await page.waitForTimeout(9000);

    var ss = await page.screenshot({path: "shinycal_america_los_angeles_screenshot.png"});

    await page.close();

    // close the browser
    await browser.close();
})();