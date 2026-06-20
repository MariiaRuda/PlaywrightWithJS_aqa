const {test, expect} =require ('@playwright/test');

test('Browser Playwright Test', async ({browser})=>
{ 
    //new browser window(instanse)
    const context = await browser.newContext(); 

    // creates new tab/page for you to enter url and start automation
    const page = await context.newPage();
    
    //now to direct url to go +await
    await page.goto("https://nodejs.org/en/download");
});

//browser global variable tells Playwright to open new window with all existing browser data (cookies etc.)

test.only('Page Playwright Test', async ({page})=>
{ 
    //now to direct url to go +await
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
